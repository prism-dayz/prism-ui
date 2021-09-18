const https = require('https')
const FormData = require('form-data')

const state = {
  gameservers: null
}

const post = (path, form) => {
  return new Promise((resolve, reject) => {
    const callback = (response) => {
      let data = ``
      response.on('data', (chunk) => {
        data = `${data}${chunk}`
      })
      response.on('end', () => {
        resolve(data)
      })
    }
    const options = {
      method: 'POST',
      hostname: 'api.nitrado.net',
      path,
      headers: {
        Authorization: 'Bearer 6K-6uaKY9rKQ42Q6gF7Qk5UGbAKmnO_kEU7wFUyP7SDKTqsJES4FR3T4R_tx_4YL_VjED-xLRfdPlzRDramitbqzcUlMudVT6a4e',
        ...form.getHeaders(),
        "Content-Length": form.getLengthSync(),
      }
    }
    const request = https.request(options, callback)
    form.pipe(request)
    request.on('error', (error) => {
      console.error(error)
      reject(error)
    })
    request.end()
  })
}

const get = (path) => {
  return new Promise((resolve, reject) => {
    const callback = (response) => {
      let data = ``
      response.on('data', (chunk) => {
        data = `${data}${chunk}`
      })
      response.on('end', () => {
        resolve(data)
      })
    }
    const options = {
      method: 'GET',
      hostname: 'api.nitrado.net',
      path,
      headers: {
        Authorization: 'Bearer 6K-6uaKY9rKQ42Q6gF7Qk5UGbAKmnO_kEU7wFUyP7SDKTqsJES4FR3T4R_tx_4YL_VjED-xLRfdPlzRDramitbqzcUlMudVT6a4e'
      }
    }
    const request = https.request(options, callback)
    request.on('error', (error) => {
      console.error(error)
      reject(error)
    })
    request.end()
  })
}

const postBans = (sid, form) => {
  return post(`/services/${sid}/gameservers/settings`, form)
}

const getBanList = (sid) => {
  return get(`/services/${sid}/gameservers/settings`)
}

const getGameServersByServiceId = (sid) => {
  return get(`/services/${sid}/gameservers`)
}

const getLogFileSize = (sid, ftp_user, log_file_path) => {
  return get(`/services/${sid}/gameservers/file_server/size?path=/games/${ftp_user}/noftp/${log_file_path}`)
}

const getGameServers = async (sid) => {
  if (!state.gameservers) {
    const gameserversResponse = await getGameServersByServiceId(sid)
    const gameservers = JSON.parse(gameserversResponse)
    state.gameservers = gameservers
    return gameservers
  } else {
    return state.gameservers
  }
}

const getFtpUser = async (sid) => {
  const gameservers = await getGameServers(sid)
  const { data }  = gameservers
  const { gameserver } = data
  const { credentials } = gameserver
  const { ftp } = credentials
  const { username } = ftp
  return username
}

const getLogFilesList = async (sid) => {
  const gameservers = await getGameServers(sid)
  const { data }  = gameservers
  const { gameserver } = data
  const { game_specific } = gameserver
  const { log_files } = game_specific
  return log_files
}

const getLogFilesMap = async (sid, ftp_user, log_files) => {
  return log_files.reduce((a, c) => {
    return a.then((log_files_array) => {
      return new Promise(async (resolve, reject) => {
        const log_file_sizeResponse = await getLogFileSize(sid, ftp_user, c)
        const log_file_size = JSON.parse(log_file_sizeResponse)
        const { data } = log_file_size
        const { size } = data
        resolve([ ...log_files_array, { size, log_file: c } ])
      })
    })
  }, Promise.resolve([]))
}

const main = async () => {
  const sid = `9315411`
  // const ftp_user = await getFtpUser(sid)
  // const log_files = await getLogFilesList(sid)
  // const log_files_map = await getLogFilesMap(sid, ftp_user, log_files)
  // console.log(log_files_map)
  const value = ['chesterfield','san fran','oyster basket'].join('\r\n')
  const form = new FormData()
  form.append('category', 'general')
  form.append('key', 'bans')
  form.append('value', value)
  const response = await postBans(sid, form)
  const bans = await getBanList(sid)
  console.log(response, bans)
}

main()