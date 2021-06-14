import { shallowMount } from '@vue/test-utils'
import todolist from '../../src/container/ToDoList/ToDoList'
import header from '../../src/container/ToDoList/components/header.vue'

it ('todolis初始化的时候，undolist应该为空数组', () => {
    const wrapper = shallowMount(todolist);
    const undolist = wrapper.vm.$data.undolist;
    expect(undolist).toEqual([]);
})

it('todolist监听到header的add方法时，增加一个内容', () => {
    const wrapper = shallowMount(todolist);
    const header = wrapper.find(header);
    header.vm.$emit('add', '皇帝');
    const undolist = wrapper.vm.$data.undolist;
    expect(undolist).toEqual(['皇帝']);
})