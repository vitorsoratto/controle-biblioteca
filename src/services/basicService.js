import api from "./api";

export default class BasicService {
   get(url) {
      return api
         .get(url)
         .then((res) => res.data)
         .catch((err) => console.log(err));
   }

   post(url, dados) {
      return api
         .post(url, dados)
         .then((res) => res.status)
         .catch((err) => console.log(err));
   }

   delete(url) {
      return api
         .delete(url)
         .then((res) => res.status)
         .catch((err) => console.log(err));
   }
}
