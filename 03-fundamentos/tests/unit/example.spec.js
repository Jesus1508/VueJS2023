describe('Example Component', () => {
    
    test('Debe de ser mayor a 10', () => {
        
        //Arreglar
        let value = 8

        // Etimulo
        value = value + 3
        // Observar el resultado
        expect(value).toBeGreaterThan(10)
    });


})