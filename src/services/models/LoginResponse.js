class LoginResponse {
  constructor(data) {
    this.success = data.success || false;
    this.data = data || {};
    this.message = data.message || '';
  }
}

export default LoginResponse;
