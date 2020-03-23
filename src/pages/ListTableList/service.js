import request from '@/utils/request';

export async function queryRule(params) {
  return request('/api/area', {
    params,
  });
}
export async function removeRule(params) {
  return request('/api/area', {
    method: 'DELETE',
    data: { ...params, method: 'delete' },
  });
}
export async function addRule(params) {
  return request('/api/area', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request('/api/area', {
    method: 'PUT',
    data: { ...params, method: 'update' },
  });
}
