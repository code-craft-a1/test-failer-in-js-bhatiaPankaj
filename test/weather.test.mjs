import { expect } from 'chai';
import report from '../weatherreport.mjs';
import { describe } from 'mocha';
import weatherSensors from './data/weatherSensors.mjs';

describe('Weather Report tests', () => {
    describe('test different weather scenarios', () => {
        it('should report hot stormy weather with heavy rain', () => {
            const weather = report(weatherSensors.hotStormy);
            expect(weather).equals('Stormy with heavy rain');
        });

        it('should report warm cloudy conditions', () => {
            const weather = report(weatherSensors.warmCloudy);
            expect(weather).equals('Partly cloudy');
        });

        it('should report mild dry conditions', () => {
            const weather = report(weatherSensors.mildDry);
            expect(weather).equals('Mild with rain not near');
        });

        it('should report cold rainy weather', () => {
            const weather = report(weatherSensors.coldRainy);
            expect(weather).equals('Cold with partly cloudy');
        });

        it('should report freezing calm conditions', () => {
            const weather = report(weatherSensors.freezingCalm);
            expect(weather).equals('Freezing with rain not near');
        });

        it('should report extreme weather conditions', () => {
            const weather = report(weatherSensors.extremeConditions);
            expect(weather).equals('Sunny day with heavy rain');
        });

        it('should report gentle spring weather', () => {
            const weather = report(weatherSensors.gentleSpring);
            expect(weather).equals('Mild with partly cloudy');
        });

        it('should report dry windy conditions', () => {
            const weather = report(weatherSensors.dryWindy);
            expect(weather).equals('Warm with rain not near');
        });
    });

    describe('test data format', () => {
        it('should return a meaningful error message when data is not sent in a function', () => {
            const weather = report(weatherSensors.hotStormy());
            expect(weather).equals('Error: Data is not sent in a function');
        });

        it('should return a meaningful error message when data is negative', () => {
            const weather = report(weatherSensors.invalidDataNegative);
            expect(weather).equals('Error: Invalid data: Data is negative');
        });

        it('should return a meaningful error message when data is string', () => {  
            const weather = report(weatherSensors.invalidDataString);   
        expect(weather).equals('Error: Invalid data: Data is not number');
        });

        it('should return a meaningful error message when data is array', () => {
            const weather = report(weatherSensors.invalidDataArray);
            expect(weather).equals('Error: Invalid data: Data is not object');
        });

        it('should return a meaningful error message when data is object', () => {
            const weather = report(weatherSensors.invalidDataEmptyObject);
            expect(weather).equals('Error: Invalid data: Data is not available');
        });

    
        it('should return a meaningful error message when data is null', () => {
            const weather = report(weatherSensors.invalidDataNull);
            expect(weather).equals('Error: Data is null');
        });
        

        it('should return a meaningful error message when data is undefined', () => {
            const weather = report(weatherSensors.invalidDataUndefined);
            expect(weather).equals('Error: Data is undefined');
        });

        it('should return a meaningful error message when data is empty object', () => {
            const weather = report(weatherSensors.invalidDataEmptyObject);
            expect(weather).equals('Error: Data is empty object');
        });
        

        it('should return a meaningful error message when data is out of range', () => {
            const weather = report(weatherSensors.invalidBigData);
            expect(weather).equals('Error: Invalid range of data');
        });

     

        
    });
});






