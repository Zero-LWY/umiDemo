import request from '@/utils/request';

export async function queryRule(params) {
  return  (request('/api/menu', {
    method: 'GET',
    params,
    
  }));
}
export async function queryPermission(params) {
  return (request('/api/menu/permission', {
    method: 'GET',
    params,
  }));
}
export async function removeRule(params) {
  return request('/api/menu/', {
    method: 'DELETE',
    data: { ...params},
  });
}
export async function removePermission(params) {
  return request('/api/menu/permission', {
    method: 'DELETE',
    data: { ...params},
  });
}
export async function addRule(params) {
  return request('/api/menu/', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
