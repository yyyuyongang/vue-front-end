import { shallowMount } from '@vue/test-utils';
import Post from '@/components/Post.vue'

let wrapper = null

describe('Post.vue', () => {
  test('show posted information after button is clicked', () => {
    const wrapper = shallowMount(Post)
    //const inputField: HTMLInputElement = wrapper.find('input').element as HTMLInputElement
    //const value = inputField.value
    //wrapper.setData({body: 'body'})
    //expect(wrapper.text()).toContain('body')
    //expect(wrapper.text()).toContain('counter: 0')
    wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('article1')
    console.log(wrapper.text())
    //console.log(value);
    
   
  })
})