import request from '@/utils/request';

export async function queryRule(params) {
  return request('/api/user', {
    params,
  });
}
export async function removeRule(params) {
  return request('/api/user', {
    method: 'DELETE',
    params,
  });
}
export async function addRule(params) {
  return request('/api/user', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request('/api/user', {
    method: 'PUT',
    data: { ...params, method: 'update' },
  });
}
