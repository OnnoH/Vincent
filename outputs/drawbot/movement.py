from time import sleep

# constant for the speed of turning
DEGREES_PER_SECOND = (6/5)*360
PEN_SERVO = 2
PEN_UP = 125
PEN_DOWN = 45
FORWARD = "f"
REVERSE = "r"
LEFT = "l"
RIGHT = "r"


class Movement:
    def __init__(self, bot) -> None:
        self.bot = bot

    def forwards(self):
        self.bot.motorOn(LEFT, FORWARD, 100)
        self.bot.motorOn(RIGHT, FORWARD, 100)

    def reverse(self):
        self.bot.motorOn(LEFT, REVERSE, 100)
        self.bot.motorOn(RIGHT, REVERSE, 100)

    def stop(self):
        self.bot.motorOff(RIGHT)
        self.bot.motorOff(LEFT)

    def spin(self):
        self.bot.motorOn(LEFT, FORWARD, 80)
        self.bot.motorOn(RIGHT, REVERSE, 80)

    def turnLeft(self, howFar):
        self.bot.motorOn(LEFT, REVERSE, 80)
        self.bot.motorOn(RIGHT, FORWARD, 80)
        sleep(howFar/DEGREES_PER_SECOND)
        self.stop()

    def turnRight(self, howFar):
        self.bot.motorOn(LEFT, FORWARD, 80)
        self.bot.motorOn(RIGHT, REVERSE, 80)
        sleep(howFar/DEGREES_PER_SECOND)
        self.stop()

    def penDown(self):
        self.bot.goToPosition(PEN_SERVO, PEN_DOWN)

    def penUp(self):
        self.bot.goToPosition(PEN_SERVO, PEN_UP)

    def frontSensor(self):
        return (self.bot.getDistance(FORWARD))

    def beepHorn(self):
        self.bot.beepHorn()
