import Counter from "@/components/Counter";
import { shallowMount, mount } from "@vue/test-utils";

describe('Counter Component', () => {

    let wrapper = shallowMount(Counter);


    // test('debe de hacer match con el snapshot', () => {
        
    //     const wrapper = shallowMount(Counter)
        
    //     expect( wrapper.html() ).toMatchSnapshot()

    // });

    test('h2 debe de tener el valor por defecto "Counter"', () => {
        

        expect (wrapper.find('h2').exists()).toBeTruthy()

        const h2value = wrapper.find('h2').text()

        expect(h2value).toBe('Counter!!!')
    });

    test('el valor por defecto debe de ser 10 en el p', () => {
        

        // const pTags = wrapper.findAll('p')
        const value =wrapper.find('[data-testid="counter"]').text()

        // expect( pTags[1].text() ).toBe('10')
        expect(value).toBe('10')

    });
    
    test('debe de incrementar y decrementar el valor del contador', async() => {

        const [increaseBtn, descreaseBtn] = wrapper.findAll('button')

        // await increaseBtn.trigger('click')
        // await increaseBtn.trigger('click')
        // await increaseBtn.trigger('click')

        // await descreaseBtn.trigger('click')
        // await descreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        // expect(value).toBe('11')
    });

    test('debe de establecer el valor por defecto', () => {
        
        const {start} = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number (value)).toBe(start)

    });

    test('debe de mostrar la prop title', () => {
        const title = 'Hola Mundo'
        const wrapper = shallowMount(Counter, { 
            props: {
                title
            }
        })

        expect ( wrapper.find('h2').text()).toBe('Hola Mundo!!!')

    });
})