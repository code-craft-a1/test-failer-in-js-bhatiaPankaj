import { expect } from 'chai';
import {getMajorColor, getMinorColor, getNumberFromColor, print_color_map} from '../misaligned.mjs';
import {describe} from 'mocha';




describe.only('Misaligned Tests', () => { 
    describe('Test get_color_map' ,() =>{
        it('should return  1 for White and Blue', ()=>{
            expect(getNumberFromColor('White', 'Blue')).equals(1)
        });

        it('should return 2 for White and Orange', ()=>{
            expect(getNumberFromColor('White', 'Orange')).equals(2)
        });        

    }),
    describe('Test getMajorColor' ,() =>{
        it('should return White for 1', ()=>{
            expect(getMajorColor(1)).equals('White')
        });

        it('should return -1 for out of range values', ()=>{
            expect(getMajorColor(0)).equals(-1)
        });

        it('should return -1 for out of range values', ()=>{
            expect(getMajorColor(26)).equals(-1)
        });

        it('should return -1 for invalid values', ()=>{
            expect(getMajorColor(undefined)).equals(-1)
        });
    
        
    })

    describe('Test getMinorColor' ,() =>{
        it('should return Blue for 1', ()=>{
            expect(getMinorColor(1)).equals('Blue')
        });

        it('should return -1 for out of range values', ()=>{
            expect(getMinorColor(0)).equals(-1)
        });

        it('should return -1 for invalid values', ()=>{
            expect(getMinorColor(undefined)).equals(-1)
        });
    });

    describe('Test getNumberFromColor' ,() =>{
        it('should return 1 for White and Blue', ()=>{
            expect(getNumberFromColor('White', 'Blue')).equals(1)
        });

        it('should return -1 for invalid values', ()=>{
            expect(getNumberFromColor(undefined, 'Blue')).equals(-1)
        });

        it('should return -1 for invalid values', ()=>{
            expect(getNumberFromColor('White', undefined)).equals(-1)
        });

        it.only('should return a message  for invalid colors', ()=>{
            expect(getNumberFromColor('Yellow', 'Grey')).includes("Error: color not found")
        });

        
    });
 })






