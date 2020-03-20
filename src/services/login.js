import request from 'umi-request';

export async function fakeAccountLogin(params) {
  return request('/api/login/do_login', {
    method: 'POST',
    data: params,
  });
}
export async function getFakeCaptcha(email) {
  return request(`/api/email/send?mailAddress=${email}`);
}
