import axios from "axios";
import { Constants } from "expo";

const url = Constants.manifest.extra.url;

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    if (error["response"] != undefined)
      return Promise.reject(error.response.data.error);
    return Promise.reject(error);
  }
);

export function Register(user) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/user/register/`, user)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function Login(user) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/user/login/`, user)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        console.log('bb', err)
        return reject(err);
      });
  });
}

export function Forgot(email) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/user/forgot/`, { email: email })
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function resetPassword(resetInstance) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/user/resetPassword/`, resetInstance)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function getClasses() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/student/getClasses/`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function joinRollCall(qhereUrl) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/student/${qhereUrl}`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function getMyClasses() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/student/getUserClasses`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function getDiscontinuity(classId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/student/${classId}/getDiscontinuity`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function checkToken() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/auth/verifyToken`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function joinClass(classId) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/student/${classId}/joinClass`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function getRequests() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/manager/getClassesRequest/`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function createClass(classInstance) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/manager/createClass/`, classInstance)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function getManagerClasses() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/manager/getClasses/`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function getClassInfo(classId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/manager/class/${classId}/info/`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function approveStudent(requestId) {
  return new Promise((resolve, reject) => {
    axios
      .put(`${url}/manager/${requestId}/approveStudent/`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function rejectStudent(requestId) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/manager/${requestId}/rejectStudent/`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function editClass(classId, classInstance) {
  return new Promise((resolve, reject) => {
    axios
      .put(`${url}/manager/${classId}/updateClass/`, classInstance)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function deleteClass(classId) {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${url}/manager/${classId}/deleteClass/`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function getNotifications(classId) {
  return new Promise((resolve, reject) => {
    console.log(classId)
    axios
      .get(`${url}/manager/getNotification/${classId}`)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export function sendNotification(notificationInstance) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/manager/sendNotification/`, notificationInstance)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err);
      });
  });
}


