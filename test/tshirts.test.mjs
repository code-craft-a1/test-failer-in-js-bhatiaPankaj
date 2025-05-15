import { expect } from 'chai';
import { size } from "../tshirts.mjs";
import {describe} from 'mocha';




describe('T shirt size Calculator', () => { 
    describe('Standad sizes' ,() =>{
        it('should return  S for sizes under 38', ()=>{
            expect(size(37)).equals('S')
        });
        it('should return  M for sizes between 38 and 42', ()=>{
            expect(size(39)).equals('M')
        });
        it('should return L for sizes  > 42' , ()=> {
            expect(size(45)).equals('L')
        })

    }),
    describe('Boundary condition sizes' ,() =>{
        it('should return "boundary situation" for size equal to  38', ()=>{
            expect(size(38)).equals('Boundary situation')
        });
       
        it('should return "boundary situation" for size equal to  42', ()=>{
            expect(size(42)).equals('Boundary situation')
        });

    }),
    describe('Edge cases' ,() =>{
        it('should return error when an extremely large number is given ', ()=>{
            expect(size(Number.MAX_VALUE +1)).equals('Please provide a smaller number')
        });
        it('should return error when an extremely large number is given ', ()=>{
            expect(size(Number.MIN_VALUE +1)).equals('Please provide a greater number')
        });

        it('should return error when 0 is given ', ()=>{
            expect(size(0)).equals('Please provide a valid greater number')
        });
        
        it('should return error when a negative number is given ', ()=>{
            expect(size(-1)).equals('Please provide a valid greater number')
        });
       

    }) ,
    describe('Input validation' ,() =>{
        it('should return error when undefined  is given ', ()=>{
            expect(size(undefined)).equals('Please provide a valid number')
        });

        it('should return error when no param  is given ', ()=>{
            expect(size()).equals('Please provide a valid number')
        });


        it('should return error when null  is given ', ()=>{
            expect(size(null)).equals('Please provide a valid number')
        });

        it('should return error when a symbol string is given ', ()=>{
            expect(size("%#$#%")).equals('Please provide a valid number')
        });

        it('should return error when a  string is given ', ()=>{
            expect(size("S")).equals('Please provide a valid number')
        });
        
         it('should return S when a number in  string is given ', ()=>{
            expect(size("20")).equals('S')
        });
        
        it('should return an error when a non ASCII  string is passed  ', ()=>{
            expect(size("🥲")).equals('')
        });
        

    })
 })






