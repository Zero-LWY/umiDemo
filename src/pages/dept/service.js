import request from '@/utils/request';

export async function queryRule(params) {
  return request('/api/dept', {
    params,
  });
}
export async function removeRule(params) {
  return request('/api/dept', {
    method: 'DELETE',
    data: { ...params, method: 'delete' },
  });
}
export async function addRule(params) {
  return request('/api/dept', {
    method: 'POST',
    data: { ...params},
  });
}
export async function updateRule(params) {
  return request('/api/dept', {
    method: 'PUT',
    data: { ...params, method: 'update' },
  });
}
