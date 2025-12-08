import api from "@/utils/api";

export default {
  async login(payload) {
    const res = await api.post("/auth/login", payload);
    return res.data;
  }
};
