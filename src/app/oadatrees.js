export const masterTree = {
  bookmarks: {
    _type: "application/vnd.oada.bookmarks.1+json",
    _rev: 0,
    isoblue: {
      _type: "application/vnd.oada.isoblue.1+json",
      _rev: 0,
      "device-index": {
        "*": {
          _type: "application/vnd.oada.isoblue.device.1+json",
          _rev: 0,
          "*": {
            _type: "application/vnd.oada.isoblue.dataset.1+json",
            _rev: 0,
            "day-index": {
              "*": {
                _type: "application/vnd.oada.isoblue.day.1+json",
                _rev: 0,
                "hour-index": {
                  "*": {
                    _type: "application/vnd.oada.isoblue.hour.1+json",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const hourTree = {
  bookmarks: {
    _type: "applications/vnd.oada.bookmarks.1+json",
    _rev: 0,
    isoblue: {
      _type: "applications/vnd.oada.isoblue.1+json",
      _rev: 0,
      "device-index": {
        "*": {
          _type: "applications/vnd.oada.isoblue.device.1+json",
          _rev: 0,
          "*": {
            _type: "application/vnd.oada.isoblue.dataset.1+json",
            _rev: 0,
            "day-index": {
              "*": {
                _type: "applications/vnd.oada.isoblue.day.1+json",
                _rev: 0,
              },
            },
          },
        },
      },
    },
  },
};

export const dayTree = {
  bookmarks: {
    _type: "applications/vnd.oada.bookmarks.1+json",
    _rev: 0,
    isoblue: {
      _type: "applications/vnd.oada.isoblue.1+json",
      _rev: 0,
      "device-index": {
        "*": {
          _type: "applications/vnd.oada.isoblue.device.1+json",
          _rev: 0,
          "*": {
            _type: "application/vnd.oada.isoblue.dataset.1+json",
            _rev: 0,
          },
        },
      },
    },
  },
};

export const deviceTree = {
  bookmarks: {
    _type: "applications/vnd.oada.bookmarks.1+json",
    _rev: 0,
    isoblue: {
      _type: "applications/vnd.oada.isoblue.1+json",
      _rev: 0,
      "device-index": {},
    },
  },
};
