export const weatherSensors = {
    hotStormy: function() {
        return {
            temperatureInC: 28,
            precipitation: 65,
            humidity: 85,
            windSpeedKMPH: 52
        };
    },

    warmCloudy: function() {
        return {
            temperatureInC: 22,
            precipitation: 45,
            humidity: 65,
            windSpeedKMPH: 28
        };
    },

    mildDry: function() {
        return {
            temperatureInC: 15,
            precipitation: 15,
            humidity: 18,
            windSpeedKMPH: 22
        };
    },

    coldRainy: function() {
        return {
            temperatureInC: 5,
            precipitation: 55,
            humidity: 82,
            windSpeedKMPH: 48
        };
    },

    freezingCalm: function() {
        return {
            temperatureInC: -2,
            precipitation: 10,
            humidity: 45,
            windSpeedKMPH: 15
        };
    },

    extremeConditions: function() {
        return {
            temperatureInC: 35,
            precipitation: 80,
            humidity: 90,
            windSpeedKMPH: 58
        };
    },

    gentleSpring: function() {
        return {
            temperatureInC: 18,
            precipitation: 25,
            humidity: 45,
            windSpeedKMPH: 20
        };
    },

    dryWindy: function() {
        return {
            temperatureInC: 24,
            precipitation: 5,
            humidity: 15,
            windSpeedKMPH: 45
        };
    },
    invalidDataNegative: function() {
        return {
            temperatureInC: -1,
            precipitation: -1,
            humidity: -1,
            windSpeedKMPH: -1
        };
    },

    invalidBigData: function() {
        return {
            temperatureInC: 1000,
            precipitation: 1000,
            humidity: 1000,
            windSpeedKMPH: 1000
        };
    },


    invalidDataString: function() {
        return {
            temperatureInC: 'a',
            precipitation: 'b',
            humidity: 'c',
            windSpeedKMPH: 'd'
        };
    },
    invalidDataArray: function() {
        return [1, 2, 3];
    },
    invalidDataEmptyObject: function() {
        return {};
    },
    invalidDataNull: function() {
        return null;
    },
    invalidDataUndefined: function() {
        return undefined;
    }
};





export default weatherSensors;