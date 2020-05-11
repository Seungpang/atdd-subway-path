const METHOD = {
  PUT() {
    return {
      method: 'PUT'
    }
  },
  DELETE() {
    return {
      method: 'DELETE'
    }
  },
  POST(data) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...data
      })
    }
  }
}

const api = (() => {
  const request = (uri, config) => fetch(uri, config)
  const requestWithJsonData = (uri, config) => fetch(uri, config).then(data => data.json())

  const station = {
    get(id) {
      return requestWithJsonData(`/stations/${id}`)
    },
    getAll() {
      return requestWithJsonData(`/stations`)
    },
    create(data) {
      return requestWithJsonData(`/stations`, METHOD.POST(data))
    },
    update(data, id) {
      return requestWithJsonData(`/stations/${id}`, METHOD.PUT(data))
    },
    delete(id) {
      return request(`/stations/${id}`, METHOD.DELETE)
    }
  }

  const line = {
    get(id) {
      return requestWithJsonData(`/lines/${id}`)
    },
    getAll() {
      return requestWithJsonData(`/lines`)
    },
    getAllDetail() {
      return requestWithJsonData(`/lines/detail`)
    },
    addLineStation(lineId, lineStationCreateRequestView) {
      return request(`/lines/${lineId}/stations`, METHOD.POST(lineStationCreateRequestView))
    },
    create(data) {
      return requestWithJsonData(`/lines`, METHOD.POST(data))
    },
    update(id, data) {
      return requestWithJsonData(`/lines`, METHOD.POST(data))
    },
    delete(id) {
      return request(`/lines/${id}`, METHOD.DELETE)
    }
  }

  const edge = {}

  return {
    station,
    line,
    edge
  }
})()

export default api