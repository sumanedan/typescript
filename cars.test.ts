import {expect,assert} from 'chai'
import {Car} from './cars'
describe("Running tests for the class Car",()=>{
    it("testing getEngine fn",()=>{
        var car=new Car("1.1 litres")
        expect(car.getEngine()).to.equal("1.1")
    })

})

