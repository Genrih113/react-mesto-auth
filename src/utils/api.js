class Api {
  constructor({baseUrl, token}) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  editUserInfo(userInfoObj) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userInfoObj.name,
        about: userInfoObj.about
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  addNewCard(inputsInfoObject) {
    return fetch(this._baseUrl + '/cards', {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputsInfoObject.name,
        link: inputsInfoObject.link
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  deleteCard(cardId) {
    return fetch(this._baseUrl + '/cards/' + cardId, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  likeToggleCard(doILikedCard, imageId) {
    if (!doILikedCard) {
      return fetch(this._baseUrl + '/cards/likes/' + imageId, {
        method: 'PUT',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
    } else {
      return fetch(this._baseUrl + '/cards/likes/' + imageId, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
    }
  }

  changeAvatar(url) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: url//.popupInputAvatarLink
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-18',
  token: '7d3b332b-dc1e-49e3-90aa-8e33833ea304'
});

export default api;
