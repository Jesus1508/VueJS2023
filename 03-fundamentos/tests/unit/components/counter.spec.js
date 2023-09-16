import Counter from "@/components/Counter";
import { shallowMount, mount } from "@vue/test-utils";

describe('Counter Component', () => {
    test('debe de hacer match con el snapshot', () => {
        
        const wrapper = shallowMount(Counter)
        
        expect( wrapper.html() ).toMatchSnapshot()

    });
})