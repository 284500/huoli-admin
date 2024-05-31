import request from '@/utils/request/Request'

// 字典类型列表
export function dictTypeLists(params) {
    return request.get({ url: '/setting/dict/type/list', params })
}
// 字典类型列表
export function dictTypeAll(params) {
    return request.get({ url: '/setting/dict/type/all', params })
}
// 添加字典类型
export function dictTypeAdd(params) {
    return request.post({ url: '/setting/dict/type/add', params })
}
// 编辑字典类型
export function dictTypeEdit(params) {
    return request.post({ url: '/setting/dict/type/edit', params })
}
// 删除字典类型
export function dictTypeDelete(params) {
    return request.post({ url: '/setting/dict/type/del', params })
}
// 字典数据列表
export function dictDataLists(params) {
    return request.get(
        { url: '/setting/dict/data/list', params },
        {
            ignoreCancelToken: true
        }
    )
}
// 字典数据列表
export function dictDataAll(params) {
    return request.get(
        { url: '/setting/dict/data/all', params },
        {
            ignoreCancelToken: true
        }
    )
}
// 添加字典数据
export function dictDataAdd(params) {
    return request.post({ url: '/setting/dict/data/add', params })
}

// 编辑字典数据
export function dictDataEdit(params) {
    return request.post({ url: '/setting/dict/data/edit', params })
}

// 删除字典数据
export function dictDataDelete(params) {
    return request.post({ url: '/setting/dict/data/del', params })
}

