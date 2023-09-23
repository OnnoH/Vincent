tailsAreOn = False

LIGHT_ON = "on"
LIGHT_OFF = "off"
LIGHT_REAR_LEFT = 2
LIGHT_REAR_RIGHT = 3
LIGHT_FRONT_LEFT = 1
LIGHT_FRONT_RIGHT = 0
ORANGE = (255, 165, 0)


class Lights:
    def __init__(self, bot) -> None:
        self.bot = bot

    def headLights(self, state):
        self.bot.setBrightness(20)
        if (state == LIGHT_ON):
            self.bot.setLED(LIGHT_FRONT_LEFT, self.bot.RED)
            self.bot.setLED(LIGHT_FRONT_RIGHT, self.bot.RED)
        else:
            self.bot.setLED(LIGHT_FRONT_LEFT, self.bot.BLACK)
            self.bot.setLED(LIGHT_FRONT_RIGHT, self.bot.BLACK)
        self.bot.show()

    def tailLights(self, state):
        global tailsAreOn
        self.bot.setBrightness(20)
        if (state == LIGHT_ON):
            tailsAreOn = True
            self.bot.setLED(LIGHT_REAR_LEFT, self.bot.RED)
            self.bot.setLED(LIGHT_REAR_RIGHT, self.bot.RED)
        else:
            tailsAreOn = False
            self.bot.setLED(LIGHT_REAR_LEFT, self.bot.BLACK)
            self.bot.setLED(LIGHT_REAR_RIGHT, self.bot.BLACK)
        self.bot.show()

    def brakeLights(self, state):
        if (state == LIGHT_ON):
            self.bot.setBrightness(100)
            self.bot.setLED(LIGHT_REAR_LEFT, self.bot.RED)
            self.bot.setLED(LIGHT_REAR_RIGHT, self.bot.RED)
        else:
            self.bot.setBrightness(20)
            self.bot.setLED(LIGHT_REAR_LEFT, self.bot.BLACK)
            self.bot.setLED(LIGHT_REAR_RIGHT, self.bot.BLACK)
            if tailsAreOn:
                self.tailLights(LIGHT_ON)
        self.bot.show()

    def indicatorLeft(self, state):
        if (state == LIGHT_ON):
            self.bot.setBrightness(100)
            self.bot.setLED(LIGHT_REAR_LEFT, ORANGE)
            self.bot.setLED(LIGHT_FRONT_LEFT, ORANGE)
        else:
            self.bot.setBrightness(20)
            self.bot.setLED(LIGHT_REAR_LEFT, self.bot.BLACK)
            self.bot.setLED(LIGHT_FRONT_LEFT, self.bot.BLACK)
            if tailsAreOn:
                self.tailLights(LIGHT_ON)
        self.bot.show()

    def indicatorRight(self, state):
        if (state == LIGHT_ON):
            self.bot.setBrightness(100)
            self.bot.setLED(LIGHT_REAR_RIGHT, ORANGE)
            self.bot.setLED(LIGHT_FRONT_RIGHT, ORANGE)
        else:
            self.bot.setBrightness(20)
            self.bot.setLED(LIGHT_REAR_RIGHT, self.bot.BLACK)
            self.bot.setLED(LIGHT_FRONT_RIGHT, self.bot.BLACK)
            if tailsAreOn:
                self.tailLights(LIGHT_ON)
        self.bot.show()

    def lightsOut(self):
        tailsAreOn = False
        self.bot.setLED(LIGHT_FRONT_RIGHT, self.bot.BLACK)
        self.bot.setLED(LIGHT_FRONT_LEFT, self.bot.BLACK)
        self.bot.setLED(LIGHT_REAR_LEFT, self.bot.BLACK)
        self.bot.setLED(LIGHT_REAR_RIGHT, self.bot.BLACK)
        self.bot.show()
