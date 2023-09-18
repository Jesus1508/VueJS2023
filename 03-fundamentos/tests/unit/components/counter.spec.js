import Counter from "@/components/Counter";
import { shallowMount, mount } from "@vue/test-utils";

describe('Counter Component', () => {
    // test('debe de hacer match con el snapshot', () => {
        
    //     const wrapper = shallowMount(Counter)
        
    //     expect( wrapper.html() ).toMatchSnapshot()

    // });

    test('h2 debe de tener el valor por defecto "Counter"', () => {
        
        const wrapper = shallowMount(Counter)

        expect (wrapper.find('h2').exists()).toBeTruthy()

        const h2value = wrapper.find('h2').text()

        expect(h2value).toBe('Counter!!!')
    });

    test('el valor por defecto debe de ser 10 en el p', () => {
        
        const wrapper = shallowMount(Counter)

        // const pTags = wrapper.findAll('p')
        const value =wrapper.find('[data-testid="counter"]').text()

        // expect( pTags[1].text() ).toBe('10')
        expect(value).toBe('10')

    });
})