import AsyncStorage from '@react-native-community/async-storage';
import EventEmitter from 'events';
import {
    accelerometer,
    gyroscope,
    magnetometer,
    barometer,
    setUpdateIntervalForType,
    SensorTypes
  } from "react-native-sensors";


//Storing Data Gempa [...Array Gempa]
// Storing Data Gempa Magnitude > 5.0 [..Array Gempa > 5.0]
// Storing Gempa Berpotensi Tsunami

class Store {
    constructor(){
        this.eventEmitter = new EventEmitter();
        this.sensor = false;
        const accels = new Array(100).fill(0);
        const gyro = new Array(100).fill(0);
        const magnetometer = new Array(100).fill(0);
        const baro = new Array(100).fill(0);
        // this.state = {
        //     accels: accels,
        //     gyro: gyro,
        //     // magnetometer: magnetometer,
        //     baro: baro
        // }
        this.sensorData = {
            accels: accels,
            gyro: gyro,
            magnetometer: magnetometer,
            baro: baro
        }
        this._gyro;
        this._accel;
        this._magnetometer;
        this._barometer;
    }

    subscribeSensor = () => {
        //Testing Purpose set to 1000
        //Realtime set to 100
        const intervalTime = 1000;
        setUpdateIntervalForType(SensorTypes.accelerometer, intervalTime); // defaults to 100ms
        setUpdateIntervalForType(SensorTypes.gyroscope, intervalTime); // defaults to 100ms
        setUpdateIntervalForType(SensorTypes.magnetometer, intervalTime); // defaults to 100ms
        setUpdateIntervalForType(SensorTypes.barometer, intervalTime); // defaults to 100ms

        this._gyro = gyroscope
        .subscribe(({ x, y, z, timestamp }) => {
            let gyro = [...this.sensorData.gyro];
            gyro.shift();
            let mean = (x + y + z) / 3.0;
            gyro.push(mean);
            this.sensorData.gyro = gyro;
            this.eventEmitter.emit('gyro', gyro);
        })

        this._accelSub = accelerometer
        //   .pipe(
        //     map(({ x, y, z }) => x + y + z),
        //     filter(speed => speed > 20)
        //   )
        .subscribe(
            ({ x, y, z }) => {
            let accels = [...this.sensorData.accels];
            accels.shift();
            let mean = (x + y + z) / 3.0;
            accels.push(mean);
            this.sensorData.accels = accels;
            this.eventEmitter.emit('accels', accels);
            },
            error => {
            console.error("Accelerometer is not available");
            }
        );
        this._magnetometer = magnetometer.subscribe(({ x, y, z, timestamp }) =>{
            // console.log('MagnetoMeter',{ x, y, z, timestamp });
            let magnetometer = [...this.sensorData.magnetometer];
            magnetometer.shift();
            let mean = (x + y + z) / 3.0;
            magnetometer.push(mean);
            
            this.sensorData.magnetometer = magnetometer;
            this.eventEmitter.emit('magnetometer', magnetometer);
        });
        // this._barometer = 
        barometer.subscribe(() => {
            // console.log('asjasdkjh');
        }, (err) => {
            console.log(err);
        })
        // console.log(barometer, accelerometer);
        // barometer.subscribe(({ pressure }) => {
        //     console.log({ pressure })
        // });
        
        this.sensor = true;
    }


    on = (eventName, callback) => {
        this.eventEmitter.on(eventName, callback); 
    }

    getStatusSensor = () => {
        return this.sensor;
    }

    unsubSensor = () => {
        console.log('Unsubscribe from Sensor');
        this._accelSub.unsubscribe();
        // this.eventEmitter.remoteAllListener('accel', () => {})
        this.removeListen('accel');
        this._gyro.unsubscribe();
        // this.eventEmitter.remoteAllListener('gyro', () => {})
        this.removeListen('gyro');
        this._magnetometer.unsubscribe();
        this.eventEmitter('magnetometer');
        // this._barometer.unsubscribe();
        this.sensor = false;
    }

    removeListen = (eventName) => {
        this.eventEmitter.removeAllListeners(eventName);
    }
}

const store = new Store();
export default store;