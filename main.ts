let y_p = 0
let x_p = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        x_p = huskylens.readeBox(1, Content1.xCenter)
        y_p = huskylens.readeBox(1, Content1.yCenter)
        if (x_p <= 64) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        } else if (64 < x_p && x_p <= 128) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        } else if (128 < x_p && x_p <= 192) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        } else if (192 < x_p && x_p <= 256) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        } else if (256 < x_p) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        }
        basic.pause(1000)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
