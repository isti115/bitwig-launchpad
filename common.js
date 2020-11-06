const NoteRole = {
  IN_KEY: 'IN_KEY',
  MINOR: 'MINOR',
  OFF_KEY: 'OFF_KEY',
  ROOT: 'ROOT',
}

const scaleRoles = {
   0: NoteRole.ROOT,
   1: NoteRole.OFF_KEY,
   2: NoteRole.IN_KEY,
   3: NoteRole.OFF_KEY,
   4: NoteRole.IN_KEY,
   5: NoteRole.IN_KEY,
   6: NoteRole.OFF_KEY,
   7: NoteRole.IN_KEY,
   8: NoteRole.OFF_KEY,
   9: NoteRole.MINOR,
  10: NoteRole.OFF_KEY,
  11: NoteRole.IN_KEY,
}

const ColorPurpose = {
  IN_KEY_DIM : 'IN_KEY_DIM' , IN_KEY_BRIGHT : 'IN_KEY_BRIGHT' ,
  MINOR_DIM  : 'MINOR_DIM'  , MINOR_BRIGHT  : 'MINOR_BRIGHT'  ,
  OFF_KEY_DIM: 'OFF_KEY_DIM', OFF_KEY_BRIGHT: 'OFF_KEY_BRIGHT',
  ROOT_DIM   : 'ROOT_DIM'   , ROOT_BRIGHT   : 'ROOT_BRIGHT'   ,

  SUSTAIN: 'SUSTAIN',
}

const CommonColor = {
  OFF: 'OFF',

  LOW_RED   : 'LOW_RED'   , MID_RED   : 'MID_RED'   , HIGH_RED   : 'HIGH_RED'   ,
  LOW_ORANGE: 'LOW_ORANGE', MID_ORANGE: 'MID_ORANGE', HIGH_ORANGE: 'HIGH_ORANGE',
  LOW_AMBER : 'LOW_AMBER' , MID_AMBER : 'MID_AMBER' , HIGH_AMBER : 'HIGH_AMBER' ,
  LOW_YELLOW: 'LOW_YELLOW', MID_YELLOW: 'MID_YELLOW', HIGH_YELLOW: 'HIGH_YELLOW',
  LOW_GREEN : 'LOW_GREEN' , MID_GREEN : 'MID_GREEN' , HIGH_GREEN : 'HIGH_GREEN' ,
}

const defaultColor = {
  [ColorPurpose.IN_KEY_DIM]: CommonColor.LOW_AMBER,
  [ColorPurpose.IN_KEY_BRIGHT]: CommonColor.HIGH_AMBER,

  [ColorPurpose.MINOR_DIM]: CommonColor.LOW_RED,
  [ColorPurpose.MINOR_BRIGHT]: CommonColor.HIGH_RED,

  [ColorPurpose.OFF_KEY_DIM]: CommonColor.OFF,
  [ColorPurpose.OFF_KEY_BRIGHT]: CommonColor.HIGH_YELLOW,

  [ColorPurpose.ROOT_DIM]: CommonColor.LOW_GREEN,
  [ColorPurpose.ROOT_BRIGHT]: CommonColor.HIGH_GREEN,

  [ColorPurpose.SUSTAIN]: CommonColor.MID_RED,
}

const colorPurposeForRole = {
  [NoteRole.IN_KEY] :
    bright => bright ? ColorPurpose.IN_KEY_BRIGHT : ColorPurpose.IN_KEY_DIM,
  [NoteRole.MINOR] :
    bright => bright ? ColorPurpose.MINOR_BRIGHT : ColorPurpose.MINOR_DIM,
  [NoteRole.OFF_KEY] :
    bright => bright ? ColorPurpose.OFF_KEY_BRIGHT : ColorPurpose.OFF_KEY_DIM,
  [NoteRole.ROOT] :
    bright => bright ? ColorPurpose.ROOT_BRIGHT : ColorPurpose.ROOT_DIM,
}

const MIDIMessageType = {
  NOTE_OFF         : 0x80, // 128
  NOTE_ON          : 0x90, // 144
  KEY_PRESSURE     : 0xA0, // 160
  CONTROL_CHANGE   : 0xB0, // 176
  PROGRAM_CHANGE   : 0xC0, // 192
  CHANNEL_PRESSURE : 0xD0, // 208
  PITCH_BEND       : 0xE0, // 224
}