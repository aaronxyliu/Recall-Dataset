// src/mod.ts
class Mod {
  size = 0;
  items;
  start = 0;
  constructor(items) {
    this.items = items;
    this.size = items.length;
  }
  setStart(start) {
    this.start = start % this.size;
  }
  itemAt(index) {
    return this.items[(this.start + index) % this.size];
  }
  toArray() {
    const newArray = [];
    for (let i = 0;i < this.size; i++) {
      newArray.push(this.items[(i + this.start) % this.size]);
    }
    return newArray;
  }
  merge(items) {
    const theseItems = this.toArray();
    return zip(theseItems, items);
  }
  merge3(items2, items3) {
    const theseItems = this.toArray();
    return zip3(theseItems, items2, items3);
  }
}
function previous(a, i) {
  return a[i - 1 < 0 ? a.length - 1 : i - 1];
}
function next(a, i) {
  return a[i + 1 >= a.length ? 0 : i + 1];
}
function zip(a, b) {
  if (a.length !== b.length) {
    throw new Error("Cannot merge arrays of different lengths");
  }
  return a.map((x, i) => [x, b[i]]);
}
function zip3(a, b, c) {
  if (a.length !== b.length || a.length !== c.length) {
    throw new Error("Cannot merge arrays of different lengths");
  }
  return a.map((x, i) => [x, b[i], c[i]]);
}
function diff(size, a, b) {
  const ax = a % size;
  const bx = b % size;
  if (ax === bx) {
    return 0;
  }
  const d1 = bx - ax;
  let d2 = 0;
  if (d1 > 0) {
    d2 = -(ax + size - bx);
  } else {
    d2 = bx + size - ax;
  }
  return Math.abs(d1) > Math.abs(d2) ? d2 : d1;
}

// src/music.ts
var intervalName = {
  Nat: "",
  Maj: "M",
  Min: "m",
  Aug: "A",
  Dim: "d"
};
var getIntervalName = (interval) => intervalName[interval.type] + (interval.ord + 1);
var intervals = new Mod([
  [
    { ord: 0, type: "Nat", colour: "interval-color-0" },
    { ord: 1, type: "Dim", colour: "interval-color-0" }
  ],
  [
    { ord: 1, type: "Min", colour: "interval-color-1" },
    { ord: 0, type: "Aug", colour: "interval-color-1" }
  ],
  [
    { ord: 1, type: "Maj", colour: "interval-color-2" },
    { ord: 2, type: "Dim", colour: "interval-color-2" }
  ],
  [
    { ord: 2, type: "Min", colour: "interval-color-3" },
    { ord: 1, type: "Aug", colour: "interval-color-3" }
  ],
  [
    { ord: 2, type: "Maj", colour: "interval-color-4" },
    { ord: 3, type: "Dim", colour: "interval-color-4" }
  ],
  [
    { ord: 3, type: "Nat", colour: "interval-color-5" },
    { ord: 2, type: "Aug", colour: "interval-color-5" }
  ],
  [
    { ord: 4, type: "Dim", colour: "interval-color-6" },
    { ord: 3, type: "Aug", colour: "interval-color-6" }
  ],
  [
    { ord: 4, type: "Nat", colour: "interval-color-7" },
    { ord: 5, type: "Dim", colour: "interval-color-7" }
  ],
  [
    { ord: 5, type: "Min", colour: "interval-color-8" },
    { ord: 4, type: "Aug", colour: "interval-color-8" }
  ],
  [
    { ord: 5, type: "Maj", colour: "interval-color-9" },
    { ord: 6, type: "Dim", colour: "interval-color-9" }
  ],
  [
    { ord: 6, type: "Min", colour: "interval-color-10" },
    { ord: 5, type: "Aug", colour: "interval-color-10" }
  ],
  [
    { ord: 6, type: "Maj", colour: "interval-color-11" },
    { ord: 0, type: "Dim", colour: "interval-color-11" }
  ]
]);
function notesInScaleFamily(scaleFamily) {
  return scaleFamily.intervals.items.filter((x) => x).length;
}
var diatonicModes = [
  { name: "Lydian", index: 5 },
  { name: "Major / Ionian", index: 0 },
  { name: "Mixolydian", index: 7 },
  { name: "Dorian", index: 2 },
  { name: "N Minor / Aeolian", index: 9 },
  { name: "Phrygian", index: 4 },
  { name: "Locrian", index: 11 }
];
var harmonicMinorModes = [
  { name: "Lydian ♯2", index: 5 },
  { name: "Ionian ♯5", index: 0 },
  { name: "Superlocrian", index: 8 },
  { name: "Dorian ♯4", index: 2 },
  { name: "Harmonic Minor", index: 9 },
  { name: "Phrygian Dominant", index: 4 },
  { name: "Locrian ♯6", index: 11 }
];
var jazzMinorModes = [
  { name: "Lydian Dominant", index: 5 },
  { name: "Jazz Minor", index: 0 },
  { name: "Mixolydian ♭6", index: 7 },
  { name: "Assyrian", index: 2 },
  { name: "Locrian ♮2", index: 9 },
  { name: "Lydian Augmented", index: 3 },
  { name: "Altered scale", index: 11 }
];
var scaleFamily = [
  {
    index: 0,
    name: "diatonic",
    intervals: new Mod([true, false, true, false, true, true, false, true, false, true, false, true]),
    modes: diatonicModes,
    defaultModeIndex: 0
  },
  {
    index: 1,
    name: "harmonic minor",
    intervals: new Mod([true, false, true, false, true, true, false, false, true, true, false, true]),
    modes: harmonicMinorModes,
    defaultModeIndex: 9
  },
  {
    index: 2,
    name: "jazz minor",
    intervals: new Mod([true, false, true, true, false, true, false, true, false, true, false, true]),
    modes: jazzMinorModes,
    defaultModeIndex: 0
  },
  {
    index: 3,
    name: "whole tone",
    intervals: new Mod([true, false, true, false, true, false, true, false, true, false, true, false]),
    modes: [{ name: "Whole Tone", index: 0 }],
    defaultModeIndex: 0
  },
  {
    index: 4,
    name: "diminished",
    intervals: new Mod([true, false, true, true, false, true, true, false, true, true, false, true]),
    modes: [{ name: "Diminished", index: 0 }],
    defaultModeIndex: 0
  }
];
var indexList = new Mod([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
function createNoteSpec(naturalIndex, index) {
  const natural = naturals.filter((x) => x.index === naturalIndex)[0];
  if (!naturals.some((x) => x.index === naturalIndex)) {
    throw new Error(`naturalIndex is not valid: ${naturalIndex}`);
  }
  const offset = diff(12, naturalIndex, index);
  if (Math.abs(offset) > 2) {
    throw new Error(`offset between naturalIndex: ${naturalIndex}, and index: ${index}, is invalid: ${offset}`);
  }
  const noteLabel = noteLabels.filter((x) => x.offset === offset)[0];
  return {
    natural,
    index,
    offset,
    label: natural.label + noteLabel.label
  };
}
var naturals = [
  { id: 0, index: 0, label: "A" },
  { id: 1, index: 2, label: "B" },
  { id: 2, index: 3, label: "C" },
  { id: 3, index: 5, label: "D" },
  { id: 4, index: 7, label: "E" },
  { id: 5, index: 8, label: "F" },
  { id: 6, index: 10, label: "G" }
];
var naturalList = new Mod(naturals);
var notes = [
  { name: "A", index: 0 },
  { name: "A♯", index: 1 },
  { name: "A♭", index: 11 },
  { name: "B", index: 2 },
  { name: "B♯", index: 3 },
  { name: "B♭", index: 1 },
  { name: "C", index: 3 },
  { name: "C♯", index: 4 },
  { name: "C♭", index: 2 },
  { name: "D", index: 5 },
  { name: "D♯", index: 6 },
  { name: "D♭", index: 4 },
  { name: "E", index: 7 },
  { name: "E♯", index: 8 },
  { name: "E♭", index: 6 },
  { name: "F", index: 8 },
  { name: "F♯", index: 9 },
  { name: "F♭", index: 7 },
  { name: "G", index: 10 },
  { name: "G♯", index: 11 },
  { name: "G♭", index: 9 }
];
var noteLabels = [
  { offset: 0, label: "" },
  { offset: 1, label: "♯" },
  { offset: 2, label: "x" },
  { offset: -1, label: "♭" },
  { offset: -2, label: "♭♭" }
];
var nullNode = {
  scaleNote: {
    note: {
      natural: {
        id: 0,
        index: 0,
        label: "A"
      },
      index: 0,
      offset: 0,
      label: "A"
    },
    interval: {
      ord: 5,
      type: "Maj",
      colour: "interval-color-0"
    },
    intervalName: "M6",
    isScaleNote: true,
    isTonic: false,
    noteNumber: 5,
    chord: {
      romanNumeral: "vi",
      type: "Minor"
    }
  },
  chordInterval: {
    ord: 0,
    type: "Nat",
    colour: "interval-color-0"
  },
  intervalName: "1",
  isChordRoot: false,
  toggle: false,
  midiToggle: false
};
function generateScaleShim(noteSpec, mode, chordIndex, chordIntervals, toggledIndexes, toggledMidiNotes, scaleFamilyArg) {
  const scale = generateScale(noteSpec, mode, scaleFamilyArg);
  zip(scale, generateChordNumbers(scale, mode, scaleFamilyArg.intervals)).forEach((x) => {
    x[0].chord = x[1];
  });
  if (chordIndex === -1) {
    return generateNodes(scale, mode, scale[0].note.index, chordIntervals, toggledIndexes, toggledMidiNotes, scaleFamilyArg.intervals);
  } else {
    return generateNodes(scale, mode, chordIndex, chordIntervals, toggledIndexes, toggledMidiNotes, scaleFamilyArg.intervals, true);
  }
}
function generateScale(noteSpec, mode, scaleFamilyArg) {
  indexList.setStart(noteSpec.index);
  naturalList.setStart(noteSpec.natural.id);
  scaleFamilyArg.intervals.setStart(mode.index);
  intervals.setStart(0);
  const workingSet = indexList.merge3(buildScaleCounter(scaleFamilyArg.intervals.toArray()), intervals.toArray());
  const isSevenNoteScale = notesInScaleFamily(scaleFamilyArg) === 7;
  return workingSet.map(([index, [isScaleNote, counterNoteNumber], intervalCandidates]) => {
    let noteNumber;
    let natural;
    let interval;
    if (isScaleNote && isSevenNoteScale) {
      noteNumber = counterNoteNumber;
      natural = naturalList.itemAt(noteNumber);
      interval = intervalCandidates.filter((x) => x.ord === noteNumber)[0];
      if (interval == null) {
        interval = intervalCandidates[0];
      }
    } else {
      interval = intervalCandidates[0];
      noteNumber = isScaleNote ? counterNoteNumber : interval.ord;
      natural = naturalList.itemAt(interval.ord);
    }
    return {
      note: createNoteSpec(natural.index, index),
      interval,
      intervalName: getIntervalName(interval),
      isScaleNote,
      isTonic: index === noteSpec.index,
      noteNumber
    };
  });
}
function generateNodes(scaleNotes, mode, chordIndex, chordIntervals, toggledIndexes, toggledMidiNotes, scaleFamilyIntervals, chordSelected = false) {
  const chordIndexOffset = (chordIndex + 12 - scaleNotes[0].note.index) % 12;
  intervals.setStart(12 - chordIndexOffset);
  scaleFamilyIntervals.setStart(mode.index);
  const startAt = scaleNotes.filter((x) => x.note.index === chordIndex)[0].noteNumber;
  const workingSet = intervals.merge3(scaleNotes, buildScaleCounter(scaleFamilyIntervals.toArray(), startAt));
  return workingSet.map(([chordIntervalCandidates, scaleNote, scaleCounter]) => {
    let activeInterval = scaleNote.isScaleNote ? chordIntervalCandidates.filter((x) => x.ord === scaleCounter[1])[0] : chordIntervalCandidates[0];
    if (activeInterval == null) {
      activeInterval = chordIntervalCandidates[0];
    }
    return {
      scaleNote,
      chordInterval: activeInterval,
      intervalName: getIntervalName(activeInterval),
      isChordRoot: chordSelected && activeInterval.ord === 0 && activeInterval.type === "Nat",
      toggle: calculateToggle(activeInterval, scaleNote, chordSelected, toggledIndexes, chordIntervals),
      midiToggle: (toggledMidiNotes & 2 ** scaleNote.note.index) !== 0
    };
  });
}
function buildScaleCounter(diatonic, startAt = 0) {
  const noteCount = diatonic.filter((x) => x).length;
  let i = (noteCount - startAt) % noteCount;
  return diatonic.map((isNote) => {
    if (isNote) {
      const value = [true, i];
      i = (i + 1) % noteCount;
      return value;
    }
    return [false, 0];
  });
}
var romanNumeral = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];
function generateChordNumbers(scaleNotes, mode, scaleFamilyIntervals) {
  return scaleNotes.map((scaleNote) => {
    if (scaleNote.isScaleNote) {
      let roman = romanNumeral[scaleNote.noteNumber];
      const nodes = generateNodes(scaleNotes, mode, scaleNote.note.index, [], 0, 0, scaleFamilyIntervals);
      let diminished = "";
      let type = "Minor";
      if (nodes.some((x) => x.scaleNote.isScaleNote && x.chordInterval.ord === 4 && x.chordInterval.type === "Dim")) {
        diminished = "°";
        type = "Diminished";
      } else if (nodes.some((x) => x.scaleNote.isScaleNote && x.chordInterval.ord === 4 && x.chordInterval.type === "Aug")) {
        diminished = "+";
        type = "Augmented";
      } else if (nodes.some((x) => x.scaleNote.isScaleNote && x.chordInterval.ord === 2 && x.chordInterval.type === "Maj")) {
        roman = roman.toLocaleUpperCase();
        type = "Major";
      }
      return {
        romanNumeral: roman + diminished,
        type
      };
    }
    return {
      romanNumeral: "",
      type: "Major"
    };
  });
}
function calculateToggle(activeInterval, scaleNote, chordSelected, toggledIndexes, chordIntervals) {
  if (toggledIndexes === 0) {
    return chordSelected && scaleNote.isScaleNote && chordIntervals.some((x) => activeInterval.ord === x);
  }
  return (toggledIndexes & 2 ** scaleNote.note.index) !== 0;
}
function fifths() {
  const indexes = [];
  let current = 0;
  for (let i = 0;i < 12; i++) {
    indexes.push(current);
    current = (current + 7) % 12;
  }
  return indexes;
}
function chromatic() {
  const indexes = [];
  for (let i = 0;i < 12; i++) {
    indexes.push(i);
  }
  return indexes;
}
function getNodeAtIndex(nodes, index) {
  const node = nodes.find((node) => node.scaleNote.note.index === index);
  if (!node) {
    throw new Error(`Invalid index: ${index}`);
  }
  return node;
}
function indexToMIDI(index, octave) {
  return (index + 9) % 12 + octave * 12 + 12;
}

// src/service/player.ts
var defaultOctave = 57;
var octave = 12;
var playToggle = (model, msg, raise) => {
  if (!model.state.sound) {
    return;
  }
  const node = getNodeAtIndex(model.music.nodes, msg.index);
  if (node.toggle) {
    raise({
      id: "Play",
      sequence: [
        {
          timestamp: 0,
          midiNotes: [msg.midiNote ?? getMidiNote(model.state.index, msg.index)]
        }
      ]
    });
  }
};
var playChordChanged = ({ state }, msg, raise) => {
  if (!state.sound) {
    return;
  }
  if (state.toggledNotesBitmask === 0) {
    return;
  }
  const midiNotes = getSetBits(state.toggledNotesBitmask).map((i) => getMidiNote(msg.chordIndex, i));
  raise({
    id: "Play",
    sequence: [
      {
        timestamp: 0,
        midiNotes
      }
    ]
  });
};
var playTonicChanged = (model, _msg, raise) => playScale(model, raise);
var playModeChanged = (model, _msg, raise) => playScale(model, raise);
function playScale({ music, state }, raise) {
  if (!state.sound) {
    return;
  }
  let i = 0;
  const sequence = [
    ...music.nodes.filter((n) => n.scaleNote.isScaleNote).map(({ scaleNote }) => scaleNote.note.index),
    state.index + octave
  ].map((index) => ({
    timestamp: i++ * 200,
    midiNotes: [getMidiNote(state.index, index)]
  }));
  raise({
    id: "Play",
    sequence
  });
}
function getMidiNote(root, index) {
  return index < root ? defaultOctave + octave + index : defaultOctave + index;
}
function getSetBits(mask) {
  const result = [];
  let index = 0;
  while (mask > 0) {
    if (mask & 1) {
      result.push(index);
    }
    mask >>= 1;
    index++;
  }
  return result;
}

// node_modules/smplr/dist/index.mjs
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => (key in obj) ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var HttpStorage = {
  fetch(url) {
    return fetch(url);
  }
};
var _cache;
var _CacheStorage_instances;
var tryFromCache_fn;
var saveResponse_fn;
_cache = new WeakMap;
_CacheStorage_instances = new WeakSet;
tryFromCache_fn = function(request) {
  return __async(this, null, function* () {
    const cache = yield __privateGet(this, _cache);
    const response = yield cache.match(request);
    if (response)
      return response;
    else
      throw Error("Not found");
  });
};
saveResponse_fn = function(request, response) {
  return __async(this, null, function* () {
    try {
      const cache = yield __privateGet(this, _cache);
      yield cache.put(request, response.clone());
    } catch (err) {}
  });
};
function connectSerial(nodes) {
  const _nodes = nodes.filter((x) => !!x);
  _nodes.reduce((a, b) => {
    const left = "output" in a ? a.output : a;
    const right = "input" in b ? b.input : b;
    left.connect(right);
    return b;
  });
  return () => {
    _nodes.reduce((a, b) => {
      const left = "output" in a ? a.output : a;
      const right = "input" in b ? b.input : b;
      left.disconnect(right);
      return b;
    });
  };
}
function createControl(initialValue) {
  let current = initialValue;
  const listeners = /* @__PURE__ */ new Set;
  function subscribe(listener) {
    listeners.add(listener);
    listener(current);
    return () => {
      listeners.delete(listener);
    };
  }
  function set(value) {
    current = value;
    listeners.forEach((listener) => listener(current));
  }
  function get() {
    return current;
  }
  return { subscribe, set, get };
}
function midiVelToGain(vel) {
  return vel * vel / 16129;
}
function dbToGain(decibels) {
  return Math.pow(10, decibels / 20);
}
var _volume;
var _panner;
var _sends;
var _inserts;
var _disconnect;
var _unsubscribe;
var _config;
var _disconnected;
var Channel = class {
  constructor(context, options) {
    this.context = context;
    __privateAdd(this, _volume);
    __privateAdd(this, _panner);
    __privateAdd(this, _sends);
    __privateAdd(this, _inserts);
    __privateAdd(this, _disconnect);
    __privateAdd(this, _unsubscribe);
    __privateAdd(this, _config);
    __privateAdd(this, _disconnected, false);
    var _a, _b, _c, _d;
    __privateSet(this, _config, {
      destination: (_a = options == null ? undefined : options.destination) != null ? _a : context.destination,
      volume: (_b = options == null ? undefined : options.volume) != null ? _b : 100,
      volumeToGain: (_c = options == null ? undefined : options.volumeToGain) != null ? _c : midiVelToGain,
      pan: (_d = options == null ? undefined : options.pan) != null ? _d : 0
    });
    this.input = context.createGain();
    __privateSet(this, _volume, context.createGain());
    __privateSet(this, _panner, context.createStereoPanner());
    __privateGet(this, _panner).pan.value = __privateGet(this, _config).pan;
    __privateSet(this, _disconnect, connectSerial([
      this.input,
      __privateGet(this, _volume),
      __privateGet(this, _panner),
      __privateGet(this, _config).destination
    ]));
    const volume = createControl(__privateGet(this, _config).volume);
    this.setVolume = volume.set;
    __privateSet(this, _unsubscribe, volume.subscribe((volume2) => {
      __privateGet(this, _volume).gain.value = __privateGet(this, _config).volumeToGain(volume2);
    }));
  }
  get pan() {
    return __privateGet(this, _panner).pan.value;
  }
  set pan(value) {
    __privateGet(this, _panner).pan.value = value;
  }
  addInsert(effect) {
    var _a;
    if (__privateGet(this, _disconnected)) {
      throw Error("Can't add insert to disconnected channel");
    }
    (_a = __privateGet(this, _inserts)) != null || __privateSet(this, _inserts, []);
    __privateGet(this, _inserts).push(effect);
    __privateGet(this, _disconnect).call(this);
    __privateSet(this, _disconnect, connectSerial([
      this.input,
      ...__privateGet(this, _inserts),
      __privateGet(this, _volume),
      __privateGet(this, _panner),
      __privateGet(this, _config).destination
    ]));
  }
  addEffect(name, effect, mixValue) {
    var _a;
    if (__privateGet(this, _disconnected)) {
      throw Error("Can't add effect to disconnected channel");
    }
    const mix = this.context.createGain();
    mix.gain.value = mixValue;
    const input = "input" in effect ? effect.input : effect;
    const disconnect = connectSerial([__privateGet(this, _volume), mix, input]);
    (_a = __privateGet(this, _sends)) != null || __privateSet(this, _sends, []);
    __privateGet(this, _sends).push({ name, mix, disconnect });
  }
  sendEffect(name, mix) {
    var _a;
    if (__privateGet(this, _disconnected)) {
      throw Error("Can't send effect to disconnected channel");
    }
    const send = (_a = __privateGet(this, _sends)) == null ? undefined : _a.find((send2) => send2.name === name);
    if (send) {
      send.mix.gain.value = mix;
    } else {
      console.warn("Send bus not found: " + name);
    }
  }
  disconnect() {
    var _a;
    if (__privateGet(this, _disconnected))
      return;
    __privateSet(this, _disconnected, true);
    __privateGet(this, _disconnect).call(this);
    __privateGet(this, _unsubscribe).call(this);
    (_a = __privateGet(this, _sends)) == null || _a.forEach((send) => send.disconnect());
    __privateSet(this, _sends, undefined);
  }
};
_volume = new WeakMap;
_panner = new WeakMap;
_sends = new WeakMap;
_inserts = new WeakMap;
_disconnect = new WeakMap;
_unsubscribe = new WeakMap;
_config = new WeakMap;
_disconnected = new WeakMap;
function noteNameToMidi(note) {
  const REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|)(-?\d+)$/;
  const m = REGEX.exec(note);
  if (!m)
    return;
  const letter = m[1].toUpperCase();
  if (!letter)
    return;
  const acc = m[2];
  const alt = acc[0] === "b" ? -acc.length : acc.length;
  const oct = m[3] ? +m[3] : 4;
  const step = (letter.charCodeAt(0) + 3) % 7;
  return [0, 2, 4, 5, 7, 9, 11][step] + alt + 12 * (oct + 1);
}
function toMidi(note) {
  return note === undefined ? undefined : typeof note === "number" ? note : noteNameToMidi(note);
}
var PARAM_DEFAULTS = {
  volume: 0,
  tune: 0,
  detune: 0,
  ampRelease: 0.3,
  ampAttack: 0,
  lpfCutoffHz: 20000,
  offset: 0,
  loop: false,
  loopStart: 0,
  loopEnd: 0,
  reverse: false
};
var PLAYBACK_KEYS = Object.keys(PARAM_DEFAULTS);
function pickPlaybackParams(obj) {
  const result = {};
  for (const key of PLAYBACK_KEYS) {
    const value = obj[key];
    if (value !== undefined)
      result[key] = value;
  }
  return result;
}
function resolveParams(defaults, group, region, midi, velocity, overrides) {
  var _a, _b, _c, _d, _e;
  const merged = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, PARAM_DEFAULTS), defaults), pickPlaybackParams(group)), pickPlaybackParams(region));
  const pitch = (_b = (_a = region.pitch) != null ? _a : region.key) != null ? _b : midi;
  const semitones = midi - pitch;
  let detune = (semitones + merged.tune) * 100 + merged.detune;
  if ((overrides == null ? undefined : overrides.detune) !== undefined)
    detune += overrides.detune;
  return {
    detune,
    velocity,
    volume: merged.volume,
    ampRelease: (_c = overrides == null ? undefined : overrides.ampRelease) != null ? _c : merged.ampRelease,
    ampAttack: merged.ampAttack,
    lpfCutoffHz: (_d = overrides == null ? undefined : overrides.lpfCutoffHz) != null ? _d : merged.lpfCutoffHz,
    offset: merged.offset,
    loop: (_e = overrides == null ? undefined : overrides.loop) != null ? _e : merged.loop,
    loopStart: merged.loopStart,
    loopEnd: merged.loopEnd,
    ampVelCurve: region.ampVelCurve,
    loopAuto: region.loopAuto,
    reverse: overrides == null ? undefined : overrides.reverse
  };
}
function processRegion(region) {
  var _a, _b, _c, _d, _e;
  let keyLow;
  let keyHigh;
  let pitch;
  if (region.key !== undefined) {
    keyLow = keyHigh = region.key;
    pitch = region.key;
  } else if (region.keyRange) {
    [keyLow, keyHigh] = region.keyRange;
    pitch = region.pitch;
  } else {
    keyLow = 0;
    keyHigh = 127;
    pitch = region.pitch;
  }
  return {
    keyLow,
    keyHigh,
    pitch,
    velLow: (_b = (_a = region.velRange) == null ? undefined : _a[0]) != null ? _b : 0,
    velHigh: (_d = (_c = region.velRange) == null ? undefined : _c[1]) != null ? _d : 127,
    ccRange: region.ccRange,
    seqPosition: (_e = region.seqPosition) != null ? _e : 1,
    group: region.group,
    offBy: region.offBy,
    sample: region.sample,
    ref: region
  };
}
function processGroup(group) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  return {
    keyLow: (_b = (_a = group.keyRange) == null ? undefined : _a[0]) != null ? _b : 0,
    keyHigh: (_d = (_c = group.keyRange) == null ? undefined : _c[1]) != null ? _d : 127,
    velLow: (_f = (_e = group.velRange) == null ? undefined : _e[0]) != null ? _f : 0,
    velHigh: (_h = (_g = group.velRange) == null ? undefined : _g[1]) != null ? _h : 127,
    ccRange: group.ccRange,
    seqLength: group.seqLength,
    group: group.group,
    offBy: group.offBy,
    regions: group.regions.map(processRegion),
    ref: group
  };
}
function matchesCc(ccState, ccRange) {
  var _a;
  if (!ccRange)
    return true;
  for (const [ccStr, [low, high]] of Object.entries(ccRange)) {
    const cc = parseInt(ccStr, 10);
    const value = (_a = ccState.get(cc)) != null ? _a : 0;
    if (value < low || value > high)
      return false;
  }
  return true;
}
var _groups;
var _seqCounters;
var RegionMatcher = class {
  constructor(json) {
    __privateAdd(this, _groups);
    __privateAdd(this, _seqCounters);
    __privateSet(this, _groups, json.groups.map(processGroup));
    __privateSet(this, _seqCounters, /* @__PURE__ */ new Map);
  }
  match(midi, velocity, ccState) {
    var _a, _b, _c, _d;
    const results = [];
    for (let gi = 0;gi < __privateGet(this, _groups).length; gi++) {
      const group = __privateGet(this, _groups)[gi];
      if (midi < group.keyLow || midi > group.keyHigh)
        continue;
      if (velocity < group.velLow || velocity > group.velHigh)
        continue;
      if (!matchesCc(ccState, group.ccRange))
        continue;
      const counter = (_a = __privateGet(this, _seqCounters).get(gi)) != null ? _a : 0;
      for (const region of group.regions) {
        if (midi < region.keyLow || midi > region.keyHigh)
          continue;
        if (velocity < region.velLow || velocity > region.velHigh)
          continue;
        if (!matchesCc(ccState, region.ccRange))
          continue;
        if (group.seqLength !== undefined) {
          const seqPos = region.seqPosition - 1;
          if (counter % group.seqLength !== seqPos)
            continue;
        }
        results.push({
          sample: region.sample,
          pitch: (_b = region.pitch) != null ? _b : midi,
          group: (_c = region.group) != null ? _c : group.group,
          offBy: (_d = region.offBy) != null ? _d : group.offBy,
          groupRef: group.ref,
          regionRef: region.ref
        });
      }
      if (group.seqLength !== undefined) {
        __privateGet(this, _seqCounters).set(gi, counter + 1);
      }
    }
    return results;
  }
};
_groups = new WeakMap;
_seqCounters = new WeakMap;
function loadAudioBuffer(context, url, storage) {
  return __async(this, null, function* () {
    url = url.replace(/#/g, "%23").replace(/ /g, "%20").replace(/([^:]\/)\/+/g, "$1");
    const response = yield storage.fetch(url);
    if (response.status !== 200) {
      console.warn("Error loading buffer. Invalid status: ", response.status, url);
      return;
    }
    try {
      const audioData = yield response.arrayBuffer();
      const buffer = yield context.decodeAudioData(audioData);
      return buffer;
    } catch (error) {
      console.warn("Error loading buffer", error, url);
    }
  });
}
function isSafari() {
  if (typeof navigator === "undefined")
    return false;
  const ua = navigator.userAgent;
  return ua.includes("Safari") && !ua.includes("Chrome") && !ua.includes("Chromium");
}
function findFirstSupportedFormat(formats) {
  if (typeof document === "undefined")
    return null;
  const skipOgg = isSafari();
  const audio = document.createElement("audio");
  for (let i = 0;i < formats.length; i++) {
    const format = formats[i];
    if (skipOgg && format === "ogg") {
      continue;
    }
    const canPlay = audio.canPlayType(`audio/${format}`);
    if (canPlay === "probably" || canPlay === "maybe") {
      return format;
    }
    if (format === "m4a") {
      const canPlay2 = audio.canPlayType(`audio/aac`);
      if (canPlay2 === "probably" || canPlay2 === "maybe") {
        return format;
      }
    }
  }
  return null;
}
var _context;
var _storage;
var _cache2;
var SampleLoader = class {
  constructor(context, options) {
    __privateAdd(this, _context);
    __privateAdd(this, _storage);
    __privateAdd(this, _cache2, /* @__PURE__ */ new Map);
    var _a;
    __privateSet(this, _context, context);
    __privateSet(this, _storage, (_a = options == null ? undefined : options.storage) != null ? _a : HttpStorage);
  }
  load(json, onProgressOrOptions) {
    return __async(this, null, function* () {
      var _a, _b;
      const preloaded = typeof onProgressOrOptions === "object" ? onProgressOrOptions.buffers : undefined;
      const onProgress = typeof onProgressOrOptions === "function" ? onProgressOrOptions : onProgressOrOptions == null ? undefined : onProgressOrOptions.onProgress;
      const format = (_b = (_a = findFirstSupportedFormat(json.samples.formats)) != null ? _a : json.samples.formats[0]) != null ? _b : "ogg";
      const base = json.samples.baseUrl.replace(/\/$/, "");
      const names = collectSampleNames(json);
      const total = names.length;
      let loaded = 0;
      const result = /* @__PURE__ */ new Map;
      yield Promise.all(names.map((name) => __async(this, null, function* () {
        var _a2, _b2;
        const pre = preloaded == null ? undefined : preloaded.get(name);
        if (pre) {
          result.set(name, pre);
          loaded++;
          onProgress == null || onProgress(loaded, total);
          return;
        }
        const path = (_b2 = (_a2 = json.samples.map) == null ? undefined : _a2[name]) != null ? _b2 : name;
        const url = `${base}/${path}.${format}`;
        let buffer = __privateGet(this, _cache2).get(url);
        if (!buffer) {
          const fetched = yield loadAudioBuffer(__privateGet(this, _context), url, __privateGet(this, _storage));
          if (fetched) {
            buffer = fetched;
            __privateGet(this, _cache2).set(url, buffer);
          }
        }
        if (buffer)
          result.set(name, buffer);
        loaded++;
        onProgress == null || onProgress(loaded, total);
      })));
      return result;
    });
  }
};
_context = new WeakMap;
_storage = new WeakMap;
_cache2 = new WeakMap;
function collectSampleNames(json) {
  const seen = /* @__PURE__ */ new Set;
  for (const group of json.groups) {
    for (const region of group.regions) {
      seen.add(region.sample);
    }
  }
  return [...seen];
}
var _items;
var SortedQueue = class {
  constructor(compare) {
    this.compare = compare;
    __privateAdd(this, _items, []);
  }
  push(item) {
    const len = __privateGet(this, _items).length;
    let left = 0;
    let right = len - 1;
    let index = len;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.compare(item, __privateGet(this, _items)[mid]) < 0) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    __privateGet(this, _items).splice(index, 0, item);
  }
  pop() {
    return __privateGet(this, _items).shift();
  }
  peek() {
    return __privateGet(this, _items)[0];
  }
  removeAll(predicate) {
    const len = __privateGet(this, _items).length;
    __privateSet(this, _items, __privateGet(this, _items).filter((item) => !predicate(item)));
    return __privateGet(this, _items).length !== len;
  }
  clear() {
    __privateSet(this, _items, []);
  }
  size() {
    return __privateGet(this, _items).length;
  }
};
_items = new WeakMap;
var LOOKAHEAD_MS_DEFAULT = 200;
var INTERVAL_MS_DEFAULT = 50;
var _context2;
var _lookaheadSec;
var _intervalMs;
var _queue;
var _intervalId;
var _Scheduler_instances;
var ensureRunning_fn;
var Scheduler = class {
  constructor(context, options) {
    __privateAdd(this, _Scheduler_instances);
    __privateAdd(this, _context2);
    __privateAdd(this, _lookaheadSec);
    __privateAdd(this, _intervalMs);
    __privateAdd(this, _queue);
    __privateAdd(this, _intervalId);
    var _a, _b;
    __privateSet(this, _context2, context);
    __privateSet(this, _lookaheadSec, ((_a = options == null ? undefined : options.lookaheadMs) != null ? _a : LOOKAHEAD_MS_DEFAULT) / 1000);
    __privateSet(this, _intervalMs, (_b = options == null ? undefined : options.intervalMs) != null ? _b : INTERVAL_MS_DEFAULT);
    __privateSet(this, _queue, new SortedQueue((a, b) => a.time - b.time));
  }
  schedule(event, callback) {
    var _a;
    const now = __privateGet(this, _context2).currentTime;
    const time = (_a = getEventTime(event)) != null ? _a : now;
    if (time <= now + __privateGet(this, _lookaheadSec)) {
      callback(event);
      return noOp;
    }
    const item = { time, event, callback };
    __privateGet(this, _queue).push(item);
    __privateMethod(this, _Scheduler_instances, ensureRunning_fn).call(this);
    return () => {
      __privateGet(this, _queue).removeAll((q) => q === item);
    };
  }
  stop() {
    __privateGet(this, _queue).clear();
    if (__privateGet(this, _intervalId) !== undefined) {
      clearInterval(__privateGet(this, _intervalId));
      __privateSet(this, _intervalId, undefined);
    }
  }
};
_context2 = new WeakMap;
_lookaheadSec = new WeakMap;
_intervalMs = new WeakMap;
_queue = new WeakMap;
_intervalId = new WeakMap;
_Scheduler_instances = new WeakSet;
ensureRunning_fn = function() {
  if (__privateGet(this, _intervalId) !== undefined)
    return;
  __privateSet(this, _intervalId, setInterval(() => {
    const dispatchBefore = __privateGet(this, _context2).currentTime + __privateGet(this, _lookaheadSec);
    while (__privateGet(this, _queue).size() > 0 && __privateGet(this, _queue).peek().time <= dispatchBefore) {
      const item = __privateGet(this, _queue).pop();
      item.callback(item.event);
    }
    if (__privateGet(this, _queue).size() === 0) {
      clearInterval(__privateGet(this, _intervalId));
      __privateSet(this, _intervalId, undefined);
    }
  }, __privateGet(this, _intervalMs)));
};
function getEventTime(event) {
  return typeof event === "object" ? event.time : undefined;
}
var noOp = () => {};
var _context3;
var _source;
var _envelope;
var _startAt;
var _ampRelease;
var _state;
var _endedCallbacks;
var Voice = class {
  constructor(context, buffer, params, destination, stopId, group, startTime) {
    __privateAdd(this, _context3);
    __privateAdd(this, _source);
    __privateAdd(this, _envelope);
    __privateAdd(this, _startAt);
    __privateAdd(this, _ampRelease);
    __privateAdd(this, _state, "playing");
    __privateAdd(this, _endedCallbacks, []);
    __privateSet(this, _context3, context);
    this.stopId = stopId;
    this.group = group;
    __privateSet(this, _ampRelease, params.ampRelease);
    const source = context.createBufferSource();
    source.buffer = buffer;
    const cents = params.detune;
    if (source.detune) {
      source.detune.value = cents;
    } else {
      source.playbackRate.value = Math.pow(2, cents / 1200);
    }
    if (params.loopAuto) {
      source.loop = true;
      source.loopStart = buffer.duration * params.loopAuto.startRatio;
      source.loopEnd = buffer.duration * params.loopAuto.endRatio;
    } else if (params.loop) {
      source.loop = true;
      source.loopStart = params.loopStart;
      source.loopEnd = params.loopEnd || buffer.duration;
    }
    let lpf;
    if (params.lpfCutoffHz < 20000) {
      lpf = context.createBiquadFilter();
      lpf.type = "lowpass";
      lpf.frequency.value = params.lpfCutoffHz;
    }
    const gain = context.createGain();
    gain.gain.value = midiVelToGain(params.velocity) * dbToGain(params.volume);
    const envelope = context.createGain();
    envelope.gain.value = 1;
    if (lpf) {
      source.connect(lpf);
      lpf.connect(gain);
    } else {
      source.connect(gain);
    }
    gain.connect(envelope);
    envelope.connect(destination);
    const startAt = startTime != null ? startTime : context.currentTime;
    __privateSet(this, _startAt, startAt);
    let offsetSec = 0;
    if (params.offset > 0) {
      offsetSec = params.reverse ? (buffer.length - params.offset) / buffer.sampleRate : params.offset / buffer.sampleRate;
    }
    source.start(startAt, offsetSec);
    __privateSet(this, _source, source);
    __privateSet(this, _envelope, envelope);
    source.onended = () => {
      __privateSet(this, _state, "stopped");
      envelope.disconnect();
      gain.disconnect();
      lpf == null || lpf.disconnect();
      source.disconnect();
      for (const cb of __privateGet(this, _endedCallbacks))
        cb();
      __privateSet(this, _endedCallbacks, []);
    };
  }
  stop(time) {
    if (__privateGet(this, _state) !== "playing")
      return;
    __privateSet(this, _state, "stopping");
    const t = time != null ? time : __privateGet(this, _context3).currentTime;
    if (t <= __privateGet(this, _startAt)) {
      __privateGet(this, _source).stop(t);
    } else {
      const stopAt = t + __privateGet(this, _ampRelease);
      __privateGet(this, _envelope).gain.cancelScheduledValues(t);
      __privateGet(this, _envelope).gain.setValueAtTime(1, t);
      __privateGet(this, _envelope).gain.linearRampToValueAtTime(0, stopAt);
      __privateGet(this, _source).stop(stopAt);
    }
  }
  onEnded(cb) {
    if (__privateGet(this, _state) === "stopped") {
      cb();
    } else {
      __privateGet(this, _endedCallbacks).push(cb);
    }
  }
  get isActive() {
    return __privateGet(this, _state) !== "stopped";
  }
};
_context3 = new WeakMap;
_source = new WeakMap;
_envelope = new WeakMap;
_startAt = new WeakMap;
_ampRelease = new WeakMap;
_state = new WeakMap;
_endedCallbacks = new WeakMap;
var _voices;
var _byStopId;
var _byGroup;
var _VoiceManager_instances;
var remove_fn;
var VoiceManager = class {
  constructor() {
    __privateAdd(this, _VoiceManager_instances);
    __privateAdd(this, _voices, /* @__PURE__ */ new Set);
    __privateAdd(this, _byStopId, /* @__PURE__ */ new Map);
    __privateAdd(this, _byGroup, /* @__PURE__ */ new Map);
  }
  add(voice) {
    __privateGet(this, _voices).add(voice);
    getOrCreate(__privateGet(this, _byStopId), voice.stopId).add(voice);
    if (voice.group !== undefined) {
      getOrCreate(__privateGet(this, _byGroup), voice.group).add(voice);
    }
    voice.onEnded(() => __privateMethod(this, _VoiceManager_instances, remove_fn).call(this, voice));
  }
  stopAll(time) {
    for (const voice of [...__privateGet(this, _voices)]) {
      voice.stop(time);
    }
  }
  stopById(stopId, time) {
    const voices = __privateGet(this, _byStopId).get(stopId);
    if (!voices)
      return;
    for (const voice of [...voices]) {
      voice.stop(time);
    }
  }
  stopGroup(group, time) {
    const voices = __privateGet(this, _byGroup).get(group);
    if (!voices)
      return;
    for (const voice of [...voices]) {
      voice.stop(time);
    }
  }
  get activeCount() {
    return __privateGet(this, _voices).size;
  }
};
_voices = new WeakMap;
_byStopId = new WeakMap;
_byGroup = new WeakMap;
_VoiceManager_instances = new WeakSet;
remove_fn = function(voice) {
  var _a, _b;
  __privateGet(this, _voices).delete(voice);
  (_a = __privateGet(this, _byStopId).get(voice.stopId)) == null || _a.delete(voice);
  if (voice.group !== undefined) {
    (_b = __privateGet(this, _byGroup).get(voice.group)) == null || _b.delete(voice);
  }
};
function getOrCreate(map, key) {
  let set = map.get(key);
  if (!set) {
    set = /* @__PURE__ */ new Set;
    map.set(key, set);
  }
  return set;
}
function compose(a, b) {
  if (a && b)
    return (e) => {
      a(e);
      b(e);
    };
  return a != null ? a : b;
}
var EMPTY_JSON = {
  samples: { baseUrl: "", formats: [] },
  groups: []
};
function isSmplrJson(x) {
  return typeof x === "object" && x !== null && "groups" in x && Array.isArray(x.groups);
}
var _loadProgress;
var _buffers;
var _reversedBuffers;
var _defaults;
var _defaultVelocity;
var _aliases;
var _matcher;
var _voices2;
var _scheduler;
var _channel;
var _loader;
var _onLoadProgress;
var _onStart;
var _onEnded;
var _ccState;
var _Smplr_instances;
var getBuffer_fn;
var playNote_fn;
var normalizeNoteEvent_fn;
var Smplr = class {
  constructor(context, jsonOrOptions, maybeOptions) {
    __privateAdd(this, _Smplr_instances);
    __privateAdd(this, _loadProgress, { loaded: 0, total: 0 });
    __privateAdd(this, _buffers, /* @__PURE__ */ new Map);
    __privateAdd(this, _reversedBuffers, /* @__PURE__ */ new Map);
    __privateAdd(this, _defaults);
    __privateAdd(this, _defaultVelocity);
    __privateAdd(this, _aliases);
    __privateAdd(this, _matcher);
    __privateAdd(this, _voices2);
    __privateAdd(this, _scheduler);
    __privateAdd(this, _channel);
    __privateAdd(this, _loader);
    __privateAdd(this, _onLoadProgress);
    __privateAdd(this, _onStart);
    __privateAdd(this, _onEnded);
    __privateAdd(this, _ccState, /* @__PURE__ */ new Map);
    var _a, _b, _c;
    const json = isSmplrJson(jsonOrOptions) ? jsonOrOptions : undefined;
    const options = isSmplrJson(jsonOrOptions) ? maybeOptions : jsonOrOptions;
    this.context = context;
    __privateSet(this, _defaults, json == null ? undefined : json.defaults);
    __privateSet(this, _defaultVelocity, (_a = options == null ? undefined : options.velocity) != null ? _a : 100);
    __privateSet(this, _onLoadProgress, options == null ? undefined : options.onLoadProgress);
    __privateSet(this, _onStart, options == null ? undefined : options.onStart);
    __privateSet(this, _onEnded, options == null ? undefined : options.onEnded);
    if (json == null ? undefined : json.aliases) {
      __privateSet(this, _aliases, new Map(Object.entries(json.aliases)));
    }
    __privateSet(this, _channel, new Channel(context, {
      destination: options == null ? undefined : options.destination,
      volume: options == null ? undefined : options.volume,
      volumeToGain: options == null ? undefined : options.volumeToGain,
      pan: options == null ? undefined : options.pan
    }));
    __privateSet(this, _scheduler, (_b = options == null ? undefined : options.scheduler) != null ? _b : new Scheduler(context));
    __privateSet(this, _matcher, new RegionMatcher(json != null ? json : EMPTY_JSON));
    __privateSet(this, _voices2, new VoiceManager);
    __privateSet(this, _loader, (_c = options == null ? undefined : options.loader) != null ? _c : new SampleLoader(context, { storage: options == null ? undefined : options.storage }));
    if (json) {
      this.load = __privateGet(this, _loader).load(json, (loaded, total) => {
        var _a2;
        __privateSet(this, _loadProgress, { loaded, total });
        (_a2 = __privateGet(this, _onLoadProgress)) == null || _a2.call(this, { loaded, total });
      }).then((buffers) => {
        __privateSet(this, _buffers, buffers);
        return this;
      });
    } else {
      this.load = Promise.resolve(this);
    }
  }
  loadInstrument(json, buffers) {
    __privateSet(this, _defaults, json.defaults);
    __privateSet(this, _aliases, json.aliases ? new Map(Object.entries(json.aliases)) : undefined);
    __privateSet(this, _matcher, new RegionMatcher(json));
    return __privateGet(this, _loader).load(json, {
      buffers,
      onProgress: (loaded, total) => {
        var _a;
        __privateSet(this, _loadProgress, { loaded, total });
        (_a = __privateGet(this, _onLoadProgress)) == null || _a.call(this, { loaded, total });
      }
    }).then((newBuffers) => {
      __privateSet(this, _buffers, newBuffers);
    });
  }
  get loadProgress() {
    return __privateGet(this, _loadProgress);
  }
  get output() {
    return __privateGet(this, _channel);
  }
  setCC(cc, value) {
    __privateGet(this, _ccState).set(cc, value);
  }
  start(event) {
    const normalized = __privateMethod(this, _Smplr_instances, normalizeNoteEvent_fn).call(this, event);
    const schedulerStop = __privateGet(this, _scheduler).schedule(normalized, (e) => __privateMethod(this, _Smplr_instances, playNote_fn).call(this, e));
    return (time) => {
      schedulerStop();
      __privateGet(this, _voices2).stopById(normalized.stopId, time);
    };
  }
  stop(target) {
    if (target === undefined) {
      __privateGet(this, _voices2).stopAll();
    } else if (typeof target === "string" || typeof target === "number") {
      __privateGet(this, _voices2).stopById(target);
    } else {
      if (target.stopId !== undefined) {
        __privateGet(this, _voices2).stopById(target.stopId, target.time);
      } else {
        __privateGet(this, _voices2).stopAll(target.time);
      }
    }
  }
  disconnect() {
    __privateGet(this, _voices2).stopAll();
    __privateGet(this, _channel).disconnect();
    __privateGet(this, _scheduler).stop();
  }
};
_loadProgress = new WeakMap;
_buffers = new WeakMap;
_reversedBuffers = new WeakMap;
_defaults = new WeakMap;
_defaultVelocity = new WeakMap;
_aliases = new WeakMap;
_matcher = new WeakMap;
_voices2 = new WeakMap;
_scheduler = new WeakMap;
_channel = new WeakMap;
_loader = new WeakMap;
_onLoadProgress = new WeakMap;
_onStart = new WeakMap;
_onEnded = new WeakMap;
_ccState = new WeakMap;
_Smplr_instances = new WeakSet;
getBuffer_fn = function(sample, reverse) {
  if (!reverse)
    return __privateGet(this, _buffers).get(sample);
  const cached = __privateGet(this, _reversedBuffers).get(sample);
  if (cached)
    return cached;
  const original = __privateGet(this, _buffers).get(sample);
  if (!original)
    return;
  const reversed = this.context.createBuffer(original.numberOfChannels, original.length, original.sampleRate);
  for (let ch = 0;ch < original.numberOfChannels; ch++) {
    const data = original.getChannelData(ch).slice().reverse();
    reversed.copyToChannel(data, ch);
  }
  __privateGet(this, _reversedBuffers).set(sample, reversed);
  return reversed;
};
playNote_fn = function(event) {
  const { midi, velocity, time, stopId, duration, detune, lpfCutoffHz, loop, ampRelease, reverse, onStart, onEnded } = event;
  const matches = __privateGet(this, _matcher).match(midi, velocity, __privateGet(this, _ccState));
  for (const match of matches) {
    if (match.offBy !== undefined) {
      __privateGet(this, _voices2).stopGroup(match.offBy, time);
    }
  }
  let voiceStarted = false;
  for (const match of matches) {
    const buffer = __privateMethod(this, _Smplr_instances, getBuffer_fn).call(this, match.sample, reverse != null ? reverse : false);
    if (!buffer)
      continue;
    const params = resolveParams(__privateGet(this, _defaults), match.groupRef, match.regionRef, midi, velocity, { detune, lpfCutoffHz, loop, ampRelease, reverse });
    const voice = new Voice(this.context, buffer, params, __privateGet(this, _channel).input, stopId, match.group, time);
    __privateGet(this, _voices2).add(voice);
    if (!voiceStarted) {
      onStart == null || onStart(event);
      voiceStarted = true;
    }
    if (onEnded) {
      voice.onEnded(() => onEnded(event));
    }
    if (duration != null) {
      const startT = time != null ? time : this.context.currentTime;
      const releaseAt = startT + duration;
      voice.stop(releaseAt);
    }
  }
};
normalizeNoteEvent_fn = function(event) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (typeof event === "string" || typeof event === "number") {
    const midi2 = (_c = (_b = toMidi(event)) != null ? _b : (_a = __privateGet(this, _aliases)) == null ? undefined : _a.get(String(event))) != null ? _c : 0;
    return {
      note: event,
      midi: midi2,
      velocity: __privateGet(this, _defaultVelocity),
      stopId: event,
      onStart: __privateGet(this, _onStart),
      onEnded: __privateGet(this, _onEnded)
    };
  }
  const midi = (_f = (_e = toMidi(event.note)) != null ? _e : (_d = __privateGet(this, _aliases)) == null ? undefined : _d.get(String(event.note))) != null ? _f : 0;
  return __spreadProps(__spreadValues({}, event), {
    midi,
    velocity: (_g = event.velocity) != null ? _g : __privateGet(this, _defaultVelocity),
    stopId: (_h = event.stopId) != null ? _h : event.note,
    onStart: compose(__privateGet(this, _onStart), event.onStart),
    onEnded: compose(__privateGet(this, _onEnded), event.onEnded)
  });
};
function spreadKeyRanges(samples) {
  if (samples.length === 0)
    return [];
  const sorted = [...samples].sort(([a], [b]) => a - b);
  return sorted.map(([midi, name], i) => {
    const low = i === 0 ? 0 : Math.floor((sorted[i - 1][0] + midi) / 2) + 1;
    const high = i === sorted.length - 1 ? 127 : Math.floor((midi + sorted[i + 1][0]) / 2);
    return { keyRange: [low, high], pitch: midi, sample: name };
  });
}
var _smplr;
var _instrument;
_smplr = new WeakMap;
_instrument = new WeakMap;
var _wavCache;
var _wav16Cache;
_wavCache = new WeakMap;
_wav16Cache = new WeakMap;
function gsPath(name) {
  return "samples/" + name.replace(/\.\w+$/, "");
}
function vcslPath(name) {
  return name.replace(/\.\w+$/, "");
}
var GS_BASE = "https://smpldsnds.github.io/sfzinstruments-greg-sullivan-e-pianos";
var INSTRUMENTS2 = {
  CP80: {
    sfzUrl: `${GS_BASE}/cp80/CP80.sfz`,
    baseUrl: `${GS_BASE}/cp80`,
    pathFromSampleName: gsPath
  },
  PianetT: {
    sfzUrl: `${GS_BASE}/planet-t/Pianet T.sfz`,
    baseUrl: `${GS_BASE}/planet-t`,
    pathFromSampleName: gsPath
  },
  WurlitzerEP200: {
    sfzUrl: `${GS_BASE}/wurlitzer-ep200/Wurlitzer EP200.sfz`,
    baseUrl: `${GS_BASE}/wurlitzer-ep200`,
    pathFromSampleName: gsPath
  },
  TX81Z: {
    sfzUrl: "https://smpldsnds.github.io/sgossner-vcsl/Electrophones/TX81Z - FM Piano.sfz",
    baseUrl: "https://smpldsnds.github.io/sgossner-vcsl/Electrophones",
    pathFromSampleName: vcslPath
  }
};
var _smplr2;
_smplr2 = new WeakMap;
var _smplr3;
_smplr3 = new WeakMap;
var _smplr4;
_smplr4 = new WeakMap;
var _effect;
var _ready;
var _output;
_effect = new WeakMap;
_ready = new WeakMap;
_output = new WeakMap;
var _smplr5;
_smplr5 = new WeakMap;
var _smplr6;
_smplr6 = new WeakMap;
function gleitzKitUrl(name, kit) {
  var _a;
  const format = (_a = findFirstSupportedFormat(["ogg", "mp3"])) != null ? _a : "mp3";
  console.debug(`Soundfont: using ${format} format for ${name}`);
  return `https://gleitz.github.io/midi-js-soundfonts/${kit}/${name}-${format}.js`;
}
var SOUNDFONT_KITS = ["MusyngKite", "FluidR3_GM"];
var DEFAULT_SOUNDFONT_KIT = SOUNDFONT_KITS[0];
function getGoldstSoundfontLoopsUrl(instrument, kit) {
  if (instrument.startsWith("http"))
    return;
  return `https://goldst.dev/midi-js-soundfonts/${kit}/${instrument}-loop.json`;
}
function fetchSoundfontLoopData(url, sampleRate = 44100) {
  return __async(this, null, function* () {
    if (!url)
      return;
    try {
      const req = yield fetch(url);
      if (req.status !== 200)
        return;
      const raw = yield req.json();
      const loopData = {};
      Object.keys(raw).forEach((key) => {
        const midi = toMidi(key);
        if (midi) {
          const offsets = raw[key];
          loopData[midi] = [offsets[0] / sampleRate, offsets[1] / sampleRate];
        }
      });
      return loopData;
    } catch (err) {
      return;
    }
  });
}
var _smplr7;
var _hasLoops;
var Soundfont = class {
  constructor(context, options) {
    this.context = context;
    __privateAdd(this, _smplr7);
    __privateAdd(this, _hasLoops, false);
    this.config = getSoundfontConfig(options);
    const smplrOptions = {
      destination: options.destination,
      volume: options.volume,
      velocity: options.velocity,
      storage: this.config.storage,
      onLoadProgress: options.onLoadProgress
    };
    __privateSet(this, _smplr7, new Smplr(context, smplrOptions));
    const gain = context.createGain();
    gain.gain.value = this.config.extraGain;
    __privateGet(this, _smplr7).output.addInsert(gain);
    this.load = loadSoundfontData(context, this.config).then(({ buffers, noteNames, loopData }) => {
      __privateSet(this, _hasLoops, !!loopData);
      return __privateGet(this, _smplr7).loadInstrument(soundfontToSmplrJson(noteNames, loopData), buffers);
    }).then(() => this);
  }
  get hasLoops() {
    return __privateGet(this, _hasLoops);
  }
  get output() {
    return __privateGet(this, _smplr7).output;
  }
  loaded() {
    return __async(this, null, function* () {
      console.warn("deprecated: use load instead");
      return this.load;
    });
  }
  disconnect() {
    return __privateGet(this, _smplr7).disconnect();
  }
  start(sample) {
    return __privateGet(this, _smplr7).start(typeof sample === "object" ? sample : { note: sample });
  }
  stop(sample) {
    return __privateGet(this, _smplr7).stop(sample === undefined ? undefined : sample);
  }
};
_smplr7 = new WeakMap;
_hasLoops = new WeakMap;
function loadSoundfontData(context, config) {
  return __async(this, null, function* () {
    const [{ buffers, noteNames }, loopData] = yield Promise.all([
      decodeSoundfontFile(context, config),
      fetchSoundfontLoopData(config.loopDataUrl)
    ]);
    return { buffers, noteNames, loopData };
  });
}
function decodeSoundfontFile(context, config) {
  return __async(this, null, function* () {
    const sourceFile = yield (yield config.storage.fetch(config.instrumentUrl)).text();
    const json = midiJsToJson(sourceFile);
    const noteNames = Object.keys(json);
    const buffers = /* @__PURE__ */ new Map;
    yield Promise.all(noteNames.map((noteName) => __async(null, null, function* () {
      const midi = toMidi(noteName);
      if (!midi)
        return;
      try {
        const audioData = base64ToArrayBuffer(removeBase64Prefix(json[noteName]));
        const buffer = yield context.decodeAudioData(audioData);
        buffers.set(noteName, buffer);
      } catch (error) {
        console.warn(`Soundfont: failed to decode note ${noteName}`, error instanceof Error ? error.message : error);
      }
    })));
    return { buffers, noteNames: [...buffers.keys()] };
  });
}
function soundfontToSmplrJson(noteNames, loopData) {
  const entries = [];
  for (const noteName of noteNames) {
    const midi = toMidi(noteName);
    if (midi === undefined)
      continue;
    entries.push([midi, noteName]);
  }
  const spread = spreadKeyRanges(entries);
  const regions = spread.map(({ keyRange, pitch, sample }) => {
    const region = { sample, keyRange, pitch };
    if (loopData) {
      const loop = loopData[pitch];
      if (loop) {
        region.loop = true;
        region.loopStart = loop[0];
        region.loopEnd = loop[1];
      }
    }
    return region;
  });
  return {
    samples: { baseUrl: "", formats: ["ogg"] },
    groups: [{ regions }]
  };
}
function getSoundfontConfig(options) {
  var _a, _b, _c, _d, _e;
  if (!options.instrument && !options.instrumentUrl) {
    throw Error("Soundfont: instrument or instrumentUrl is required");
  }
  const config = {
    kit: (_a = options.kit) != null ? _a : DEFAULT_SOUNDFONT_KIT,
    instrument: options.instrument,
    storage: (_b = options.storage) != null ? _b : HttpStorage,
    extraGain: (_c = options.extraGain) != null ? _c : 5,
    loadLoopData: (_d = options.loadLoopData) != null ? _d : false,
    loopDataUrl: options.loopDataUrl,
    instrumentUrl: (_e = options.instrumentUrl) != null ? _e : ""
  };
  if (config.instrument && config.instrument.startsWith("http")) {
    console.warn("Use 'instrumentUrl' instead of 'instrument' to load from a URL");
    config.instrumentUrl = config.instrument;
    config.instrument = undefined;
  }
  if (!config.instrumentUrl) {
    if (config.instrument) {
      config.instrumentUrl = gleitzKitUrl(config.instrument, config.kit);
    } else {
      throw Error("Soundfont: 'instrument' or 'instrumentUrl' configuration parameter is required");
    }
  } else {
    if (config.kit !== DEFAULT_SOUNDFONT_KIT || config.instrument) {
      console.warn("Soundfont: 'kit' and 'instrument' config parameters are ignored because 'instrumentUrl' is explicitly set.");
    }
  }
  if (config.loadLoopData && config.instrument && !config.loopDataUrl) {
    config.loopDataUrl = getGoldstSoundfontLoopsUrl(config.instrument, config.kit);
  }
  return config;
}
function midiJsToJson(source) {
  const header = source.indexOf("MIDI.Soundfont.");
  if (header < 0)
    throw Error("Invalid MIDI.js Soundfont format");
  const start = source.indexOf("=", header) + 2;
  const end = source.lastIndexOf(",");
  return JSON.parse(source.slice(start, end) + "}");
}
function removeBase64Prefix(audioBase64) {
  return audioBase64.slice(audioBase64.indexOf(",") + 1);
}
function base64ToArrayBuffer(base64) {
  const decoded = window.atob(base64);
  const len = decoded.length;
  const bytes = new Uint8Array(len);
  for (let i = 0;i < len; i++) {
    bytes[i] = decoded.charCodeAt(i);
  }
  return bytes.buffer;
}
var _smplr8;
var _instrumentNames;
_smplr8 = new WeakMap;
_instrumentNames = new WeakMap;
var _smplr9;
_smplr9 = new WeakMap;

// src/service/sound.ts
var create = () => {
  let context;
  let soundfont = null;
  const play = (seqence) => {
    if (soundfont === null) {
      context = new AudioContext;
      soundfont = new Soundfont(context, { instrument: "acoustic_grand_piano" });
      soundfont.load.then(() => {
        playSequence(seqence);
      }).catch((e) => {
        console.error("Failed to load soundfont", e);
      });
      return;
    }
    playSequence(seqence);
  };
  const playSequence = (seqence) => {
    const now = context.currentTime;
    seqence.forEach((event) => {
      event.midiNotes.forEach((midiNote) => {
        soundfont?.start({ note: midiNote, time: now + event.timestamp / 1000, velocity: 127, duration: 0.3 });
      });
    });
  };
  return (_model, { sequence }, _raise) => {
    play(sequence);
  };
};

// src/service/index.ts
var soundService = create();
var service = (model, msg, raise) => {
  switch (msg.id) {
    case "ChordIntervalChange":
    case "ScaleFamilyChange":
    case "TuningChanged":
    case "LeftHandedFretboard":
    case "FlipNut":
    case "FretboardLabelChange":
    case "SetCToNoon":
    case "ModalStateChange":
    case "ToggleSound":
    case "Theme":
      break;
    case "Toggle":
      playToggle(model, msg, raise);
      break;
    case "ChordChanged":
      playChordChanged(model, msg, raise);
      break;
    case "Play":
      soundService(model, msg, raise);
      break;
    case "TonicChanged":
      playTonicChanged(model, msg, raise);
      break;
    case "ModeChanged":
      playModeChanged(model, msg, raise);
      break;
    default: {
      const _exhaustiveCheck = msg;
    }
  }
};

// src/update/updateScale.ts
var updateScale = (state) => {
  const scaleFamily2 = scaleFamily.find((x) => x.index === state.scaleFamilyIndex);
  if (!scaleFamily2) {
    throw new Error(`Invalid scaleFamilyIndex, current.scaleFamilyIndex = ${state.scaleFamilyIndex}`);
  }
  const mode = scaleFamily2.modes.find((x) => x.index === state.modeIndex);
  if (!mode) {
    throw new Error(`Invalid modeIndex, current.modeIndex = ${state.modeIndex}`);
  }
  const noteSpec = createNoteSpec(state.naturalIndex, state.index);
  const nodes = generateScaleShim(noteSpec, mode, state.chordIndex, state.chordIntervals, state.toggledNotesBitmask, state.midiToggledNotesBitmask, scaleFamily2);
  state.toggledNotesBitmask = nodes.filter((x) => x.toggle).map((x) => x.scaleNote.note.index).reduce((a, b) => a + 2 ** b, 0);
  return {
    music: {
      nodes,
      mode
    },
    state
  };
};

// src/update/update-chord-changed.ts
var Update = (model, msg) => {
  const current = model.state;
  if (msg.chordIndex === current.chordIndex) {
    current.chordIndex = -1;
  } else {
    current.chordIndex = msg.chordIndex;
  }
  current.toggledNotesBitmask = 0;
  return updateScale(current);
};

// src/update/update-chord-interval-change.ts
var Update2 = (model, msg) => {
  const current = model.state;
  current.chordIntervals = msg.chordIntervals;
  if (current.chordIndex !== -1) {
    current.toggledNotesBitmask = 0;
  }
  return updateScale(current);
};

// src/update/update-flip-nut.ts
var Update3 = (model, msg) => {
  model.state.isNutFlipped = msg.isNutFlipped;
  return model;
};

// src/update/update-fretboard-label-change.ts
var Update4 = (model, msg) => {
  model.state.fretboardLabelType = msg.labelType;
  return model;
};

// src/update/update-left-handed-fretboard.ts
var Update5 = (model, msg) => {
  model.state.isLeftHanded = msg.isLeftHanded;
  return model;
};

// src/update/update-modal-state.ts
var Update6 = (model, msg) => {
  model.state.modalState = msg.modalState;
  return model;
};

// src/update/update-mode-changed.ts
var Update7 = (model, msg) => {
  const current = model.state;
  current.modeIndex = msg.mode.index;
  current.chordIndex = -1;
  return updateScale(current);
};

// src/update/update-scale-family-change.ts
var Update8 = (model, msg) => {
  const current = model.state;
  current.scaleFamilyIndex = msg.scaleFamily.index;
  current.modeIndex = msg.scaleFamily.defaultModeIndex;
  current.chordIndex = -1;
  return updateScale(current);
};

// src/update/update-set-c-to-noon.ts
var Update9 = (model, msg) => {
  model.state.circleIsCNoon = msg.isC;
  return model;
};

// src/update/update-theme.ts
var Update10 = (model, _msg) => {
  switch (model.state.theme) {
    case "dark":
      model.state.theme = "light";
      break;
    case "light":
      model.state.theme = "dark";
      break;
    default: {
      const _exhaustivenessCheck = model.state.theme;
    }
  }
  return model;
};

// src/update/update-toggle.ts
var Update11 = (model, msg) => {
  const current = model.state;
  current.toggledNotesBitmask = current.toggledNotesBitmask ^ 2 ** msg.index;
  return updateScale(current);
};

// src/update/update-toggle-sound.ts
var Update12 = (model, _msg) => {
  model.state.sound = !model.state.sound;
  return model;
};

// src/update/update-tonic-changed.ts
var Update13 = (model, msg) => {
  const current = model.state;
  current.index = msg.noteSpec.index;
  current.naturalIndex = msg.noteSpec.natural.index;
  current.chordIndex = -1;
  return updateScale(current);
};

// src/update/update-tuning-changed.ts
var Update14 = (model, msg) => {
  model.state.tuningIndex = msg.index;
  return model;
};

// src/update/index.ts
var update = (model, msg) => {
  switch (msg.id) {
    case "TonicChanged":
      return Update13(model, msg);
    case "ModeChanged":
      return Update7(model, msg);
    case "ChordChanged":
      return Update(model, msg);
    case "Toggle":
      return Update11(model, msg);
    case "ChordIntervalChange":
      return Update2(model, msg);
    case "ScaleFamilyChange":
      return Update8(model, msg);
    case "TuningChanged":
      return Update14(model, msg);
    case "LeftHandedFretboard":
      return Update5(model, msg);
    case "FlipNut":
      return Update3(model, msg);
    case "FretboardLabelChange":
      return Update4(model, msg);
    case "SetCToNoon":
      return Update9(model, msg);
    case "ModalStateChange":
      return Update6(model, msg);
    case "Play":
      return model;
    case "ToggleSound":
      return Update12(model, msg);
    case "Theme":
      return Update10(model, msg);
    default: {
      const _exhaustiveCheck = msg;
      return _exhaustiveCheck;
    }
  }
};

// src/ui/index.ts
function arcPath(innerR, outerR, startAngle, endAngle, padAngle = 0, rounding) {
  const sa = startAngle + padAngle / 2;
  const ea = endAngle - padAngle / 2;
  const x1 = Math.sin(sa) * outerR, y1 = -Math.cos(sa) * outerR;
  const x2 = Math.sin(ea) * outerR, y2 = -Math.cos(ea) * outerR;
  const x3 = Math.sin(ea) * innerR, y3 = -Math.cos(ea) * innerR;
  const x4 = Math.sin(sa) * innerR, y4 = -Math.cos(sa) * innerR;
  const largeArc = ea - sa > Math.PI ? 1 : 0;
  if (!rounding) {
    return `M ${x1},${y1} A ${outerR},${outerR} 0 ${largeArc},1 ${x2},${y2} L ${x3},${y3} A ${innerR},${innerR} 0 ${largeArc},0 ${x4},${y4} Z`;
  }
  const cr = 10;
  const os0x = x1 - cr * Math.sin(sa), os0y = y1 + cr * Math.cos(sa);
  const os1x = x1 + cr * Math.cos(sa), os1y = y1 + cr * Math.sin(sa);
  const oe0x = x2 - cr * Math.cos(ea), oe0y = y2 - cr * Math.sin(ea);
  const oe1x = x2 - cr * Math.sin(ea), oe1y = y2 + cr * Math.cos(ea);
  const ie0x = x3 + cr * Math.sin(ea), ie0y = y3 - cr * Math.cos(ea);
  const ie1x = x3 - cr * Math.cos(ea), ie1y = y3 - cr * Math.sin(ea);
  const is0x = x4 + cr * Math.cos(sa), is0y = y4 + cr * Math.sin(sa);
  const is1x = x4 + cr * Math.sin(sa), is1y = y4 - cr * Math.cos(sa);
  const { outerStart, outerEnd, innerStart, innerEnd } = rounding;
  const ca = (r, x, y) => ` A ${r},${r} 0 0,1 ${x},${y}`;
  let d = `M ${outerStart ? `${os1x},${os1y}` : `${x1},${y1}`}`;
  d += ` A ${outerR},${outerR} 0 ${largeArc},1 ${outerEnd ? `${oe0x},${oe0y}` : `${x2},${y2}`}`;
  if (outerEnd) {
    d += ca(cr, oe1x, oe1y);
  }
  d += ` L ${innerEnd ? `${ie0x},${ie0y}` : `${x3},${y3}`}`;
  if (innerEnd) {
    d += ca(cr, ie1x, ie1y);
  }
  d += ` A ${innerR},${innerR} 0 ${largeArc},0 ${innerStart ? `${is0x},${is0y}` : `${x4},${y4}`}`;
  if (innerStart) {
    d += ca(cr, is1x, is1y);
  }
  if (outerStart) {
    d += ` L ${os0x},${os0y}${ca(cr, os1x, os1y)}`;
  }
  d += ` Z`;
  return d;
}
function arcCentroid(innerR, outerR, startAngle, endAngle) {
  const midAngle = (startAngle + endAngle) / 2;
  const midR = (innerR + outerR) / 2;
  return [Math.sin(midAngle) * midR, -Math.cos(midAngle) * midR];
}
var SVG_NS = "http://www.w3.org/2000/svg";
function renderToSvg(container, nodes) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (const node of nodes) {
    for (const element of createElement(node)) {
      container.appendChild(element);
    }
  }
}
function createElement(node) {
  switch (node.type) {
    case "g": {
      const el = document.createElementNS(SVG_NS, "g");
      if (node.transform) {
        el.setAttribute("transform", node.transform);
      }
      for (const child of node.children) {
        for (const element of createElement(child)) {
          el.appendChild(element);
        }
      }
      return [el];
    }
    case "circle": {
      const el = document.createElementNS(SVG_NS, "circle");
      el.setAttribute("cx", String(node.cx));
      el.setAttribute("cy", String(node.cy));
      el.setAttribute("r", String(node.r));
      if (node.class) {
        el.setAttribute("class", node.class);
      }
      if (node.fill) {
        el.setAttribute("fill", node.fill);
      }
      if (node.stroke) {
        el.setAttribute("stroke", node.stroke);
      }
      if (node.strokeWidth != null) {
        el.setAttribute("stroke-width", String(node.strokeWidth));
      }
      if (node.pointerEvents) {
        el.setAttribute("pointer-events", node.pointerEvents);
      }
      if (node.onClick) {
        el.addEventListener("click", node.onClick);
      }
      return [el];
    }
    case "rect": {
      const el = document.createElementNS(SVG_NS, "rect");
      el.setAttribute("x", String(node.x));
      el.setAttribute("y", String(node.y));
      el.setAttribute("width", String(node.width));
      el.setAttribute("height", String(node.height));
      if (node.class) {
        el.setAttribute("class", node.class);
      }
      if (node.fill) {
        el.setAttribute("fill", node.fill);
      }
      if (node.stroke) {
        el.setAttribute("stroke", node.stroke);
      }
      if (node.strokeWidth != null) {
        el.setAttribute("stroke-width", String(node.strokeWidth));
      }
      if (node.onClick) {
        el.addEventListener("click", node.onClick);
      }
      return [el];
    }
    case "path": {
      const el = document.createElementNS(SVG_NS, "path");
      el.setAttribute("d", node.d);
      if (node.class) {
        el.setAttribute("class", node.class);
      }
      if (node.onClick) {
        el.addEventListener("click", node.onClick);
      }
      return [el];
    }
    case "text": {
      const el = document.createElementNS(SVG_NS, "text");
      el.setAttribute("x", String(node.x));
      el.setAttribute("y", String(node.y));
      if (node.class) {
        el.setAttribute("class", node.class);
      }
      if (node.textAnchor) {
        el.setAttribute("text-anchor", node.textAnchor);
      }
      if (node.dominantBaseline) {
        el.setAttribute("dominant-baseline", node.dominantBaseline);
      }
      if (node.transform) {
        el.setAttribute("transform", node.transform);
      }
      el.textContent = node.content;
      return [el];
    }
    case "line": {
      const el = document.createElementNS(SVG_NS, "line");
      el.setAttribute("x1", String(node.x1));
      el.setAttribute("y1", String(node.y1));
      el.setAttribute("x2", String(node.x2));
      el.setAttribute("y2", String(node.y2));
      if (node.class) {
        el.setAttribute("class", node.class);
      }
      if (node.stroke) {
        el.setAttribute("stroke", node.stroke);
      }
      if (node.strokeWidth != null) {
        el.setAttribute("stroke-width", String(node.strokeWidth));
      }
      return [el];
    }
    case "use": {
      const el = document.createElementNS(SVG_NS, "use");
      el.setAttribute("href", node.href);
      el.setAttribute("x", String(node.x));
      el.setAttribute("y", String(node.y));
      el.setAttribute("width", String(node.width));
      el.setAttribute("height", String(node.height));
      if (node.style) {
        for (const [key, value] of Object.entries(node.style)) {
          el.style.setProperty(key, value);
        }
      }
      return [el];
    }
    case "div": {
      const el = document.createElement("div");
      if (node.class) {
        el.setAttribute("class", node.class);
      }
      if (node.textContent) {
        el.textContent = node.textContent;
      }
      if (node.onClick) {
        el.addEventListener("click", node.onClick);
      }
      for (const child of node.children ?? []) {
        for (const element of createElement(child)) {
          el.appendChild(element);
        }
      }
      return [el];
    }
    case "svgButton": {
      const pad = 5;
      const xPad = 15;
      const width = 40;
      const buttonNodeTree = {
        type: "g",
        transform: `translate(${node.xPos * (width + xPad)}, 0)`,
        children: [
          {
            type: "rect",
            x: pad,
            y: 0,
            width: width * node.xSize + xPad * (node.xSize - 1),
            height: 25,
            class: node.class,
            onClick: node.onClick
          },
          {
            type: "text",
            x: pad + 10,
            y: 17,
            class: "tonic-text",
            content: node.label
          }
        ]
      };
      return createElement(buttonNodeTree);
    }
    case "buttonRow": {
      const pad = 5;
      const buttonHeight = 25;
      const buttonRowTree = {
        type: "g",
        transform: `translate(0, ${node.row * (buttonHeight + pad) + pad})`,
        children: node.children
      };
      return createElement(buttonRowTree);
    }
    case "segment": {
      const [x, y] = arcCentroid(node.radius.inner, node.radius.outer, node.angle.start, node.angle.end);
      const rounding = node.rouding || {
        outerStart: false,
        outerEnd: false,
        innerEnd: false,
        innerStart: false
      };
      const path = createElement({
        type: "g",
        children: [
          {
            type: "path",
            d: arcPath(node.radius.inner, node.radius.outer, node.angle.start, node.angle.end, 0, rounding),
            class: node.class,
            onClick: node.onClick
          }
        ]
      });
      const selectionElements = node.selection ? createElement({
        type: "g",
        children: [
          {
            type: "circle",
            cx: x,
            cy: y,
            r: 25,
            class: node.selection.class,
            fill: node.selection.fill,
            stroke: "var(--color-segment-stroke)",
            strokeWidth: 2,
            pointerEvents: "none"
          }
        ]
      }) : [];
      const text = createElement({
        type: "g",
        children: [
          {
            type: "text",
            x,
            y,
            class: node.labelClass,
            textAnchor: "middle",
            dominantBaseline: "central",
            content: node.label
          }
        ]
      });
      return [...path, ...selectionElements, ...text];
    }
    case "selectHtml": {
      const fo = document.createElementNS(SVG_NS, "foreignObject");
      fo.setAttribute("x", String(node.x));
      fo.setAttribute("y", String(node.y));
      fo.setAttribute("width", String(node.width));
      fo.setAttribute("height", String(node.height));
      const select = document.createElement("select");
      select.setAttribute("class", node.class);
      for (const opt of node.options) {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.label;
        if (opt.value === node.selectedValue) {
          option.selected = true;
        }
        select.appendChild(option);
      }
      select.addEventListener("change", (e) => {
        node.onChange(e.target.value);
      });
      fo.appendChild(select);
      return [fo];
    }
    default: {
      const _exhaustiveCheck = node;
      return _exhaustiveCheck;
    }
  }
}
var icons = {
  gear: "#icon-gear"
};
function settingsIconNodes(svgWidth, onClick) {
  const size = 25;
  const gearX = svgWidth - 30;
  const gearY = 0;
  return [
    {
      type: "g",
      children: [
        { type: "rect", x: gearX, y: gearY, width: size, height: size, fill: "transparent", onClick },
        {
          type: "use",
          href: icons.gear,
          x: gearX,
          y: gearY,
          width: size,
          height: size,
          style: { fill: "none", stroke: "var(--color-segment-stroke)", "pointer-events": "none" }
        }
      ]
    }
  ];
}

// src/view/chord-interval.ts
function chordIntervalNodes(model, raise) {
  const radius = 10;
  const pad = 2;
  const children = [0, 1, 2, 3, 4, 5, 6].map((i) => ({
    type: "g",
    transform: `translate(${i * (radius * 2 + pad) + pad}, 0)`,
    children: [
      {
        type: "circle",
        cx: radius,
        cy: radius,
        r: radius,
        class: model.state.chordIntervals.includes(i) ? "mode-button mode-button-selected" : "mode-button",
        onClick: () => {
          const currentToggle = model.state.chordIntervals.reduce((acc, ci) => acc | 2 ** ci, 0);
          const updatedToggle = currentToggle ^ 2 ** i;
          const chordIntervals = [0, 1, 2, 3, 4, 5, 6].filter((ci) => (2 ** ci & updatedToggle) === 2 ** ci);
          raise({ id: "ChordIntervalChange", chordIntervals });
        }
      },
      {
        type: "text",
        x: radius,
        y: radius + 5,
        textAnchor: "middle",
        content: `${i + 1}`
      }
    ]
  }));
  return [{ type: "g", transform: "translate(0, 250)", children }];
}

// src/view/circle.ts
var circleNodes = (noteIndexes, label, svgWidth) => {
  return (model, raise) => {
    const offset = model.state.circleIsCNoon ? 3 : 0;
    const nodeByIndex = new Map(model.music.nodes.map((n) => [n.scaleNote.note.index, n]));
    const segments = generateSegments(rotate(noteIndexes, offset), nodeByIndex);
    const cx = 250;
    const cy = 250;
    const chordRadiusX = { inner: 202, outer: 242 };
    const tonicRadius = { inner: 135, outer: 198 };
    const intervalRadius = { inner: 90, outer: 135 };
    const noteSegments = segments.map((seg) => {
      const node = nodeByIndex.get(seg.index) ?? nullNode;
      const cls = "note-segment" + (node.scaleNote.isScaleNote ? node.scaleNote.isTonic ? " note-segment-tonic" : " note-segment-scale" : "");
      return {
        type: "segment",
        class: cls,
        label: node.scaleNote.note.label,
        labelClass: "note-segment-text",
        radius: tonicRadius,
        angle: { start: seg.startAngle, end: seg.endAngle },
        rouding: {
          outerStart: seg.start,
          outerEnd: seg.end,
          innerEnd: false,
          innerStart: false
        },
        onClick: () => raise({
          id: "TonicChanged",
          noteSpec: replaceDoubleSharpsAndFlatsWithEquivalentNote(node.scaleNote.note)
        })
      };
    });
    const intervalSegments = segments.map((seg) => {
      const node = nodeByIndex.get(seg.index) ?? nullNode;
      const selection = node.toggle ? {
        selection: {
          class: `interval-note-selected ${node.chordInterval.colour.replace("color", "fill")}`
        }
      } : {};
      return {
        type: "segment",
        class: node.scaleNote.isScaleNote ? "degree-segment-selected" : "interval-segment",
        label: node.intervalName,
        labelClass: "degree-segment-text",
        radius: intervalRadius,
        angle: { start: seg.startAngle, end: seg.endAngle },
        rouding: {
          outerStart: false,
          outerEnd: false,
          innerEnd: seg.end,
          innerStart: seg.start
        },
        onClick: () => raise({
          id: "Toggle",
          index: node.scaleNote.note.index
        }),
        ...selection
      };
    });
    const chordSegments = segments.map((seg) => {
      const node = nodeByIndex.get(seg.index) ?? nullNode;
      const cls = node.scaleNote.isScaleNote ? getChordSegmentClass(node.scaleNote.chord) : "chord-segment";
      const selection = node.isChordRoot ? {
        selection: {
          class: getChordSegmentClass(node.scaleNote.chord)
        }
      } : {};
      return {
        type: "segment",
        class: cls,
        label: node.scaleNote.chord?.romanNumeral ?? "",
        labelClass: "degree-segment-text",
        radius: chordRadiusX,
        angle: { start: seg.startAngle, end: seg.endAngle },
        rouding: {
          outerStart: seg.start,
          outerEnd: seg.end,
          innerEnd: seg.end,
          innerStart: seg.start
        },
        onClick: () => raise({
          id: "ChordChanged",
          chordIndex: node.scaleNote.note.index
        }),
        ...selection
      };
    });
    return [
      ...settingsIconNodes(svgWidth, () => raise({ id: "ModalStateChange", modalState: "circle-settings" })),
      {
        type: "g",
        transform: `translate(${cx}, ${cy})`,
        children: [
          { type: "text", x: 0, y: 0, class: "svg-text", textAnchor: "middle", content: label },
          { type: "g", children: noteSegments },
          { type: "g", children: intervalSegments },
          { type: "g", children: chordSegments }
        ]
      }
    ];
  };
};
function getChordSegmentClass(chord) {
  if (chord.type === "Diminished") {
    return "chord-segment-dim";
  }
  if (chord.type === "Augmented") {
    return "chord-segment-aug";
  }
  if (chord.type === "Minor") {
    return "chord-segment-minor";
  }
  if (chord.type === "Major") {
    return "chord-segment-major";
  }
  throw new Error("Unexpected ChordType");
}
function generateSegments(fifths, nodes) {
  const count = fifths.length;
  const angle = Math.PI * (2 / count);
  return fifths.map((index, i) => {
    const [isStart, isEnd] = isStartOrEnd(fifths, nodes, i);
    const itemAngle = angle * i - angle / 2;
    return {
      startAngle: itemAngle,
      endAngle: itemAngle + angle,
      index,
      start: isStart,
      end: isEnd
    };
  });
}
function isStartOrEnd(fifths, nodes, i) {
  const currentNode = nodes.get(fifths[i]);
  const previousNode = nodes.get(previous(fifths, i));
  const nextNode = nodes.get(next(fifths, i));
  if (currentNode?.scaleNote.isScaleNote) {
    return [!previousNode?.scaleNote.isScaleNote, !nextNode?.scaleNote.isScaleNote];
  }
  return [false, false];
}
function replaceDoubleSharpsAndFlatsWithEquivalentNote(noteSpec) {
  if (Math.abs(noteSpec.offset) > 1) {
    const naturalId = noteSpec.natural.id;
    const newNaturalId = noteSpec.offset > 0 ? (naturalId + 1) % 7 : naturalId === 0 ? 6 : naturalId - 1;
    const newNatural = naturals.filter((x) => x.id === newNaturalId)[0];
    return createNoteSpec(newNatural.index, noteSpec.index);
  }
  return noteSpec;
}
function rotate(array, offset) {
  return array.map((item) => (item + offset) % 12);
}

// src/view/tuning/tuning-model.ts
var guitarDots = [
  [3, 0],
  [5, 0],
  [7, 0],
  [9, 0],
  [12, -1],
  [12, 1],
  [15, 0]
];
var violaDots = [
  [2, 0],
  [4, 0],
  [5, 0],
  [7, 0],
  [12, -1],
  [12, 1]
];
var tuningInfos = [
  { tuning: "EADGBE", dots: guitarDots, description: "Guitar Standard", octave: [2, 2, 3, 3, 3, 4] },
  { tuning: "EADGCF", dots: guitarDots, description: "All Fourths", octave: [2, 2, 3, 3, 4, 4] },
  { tuning: "CGDAEB", dots: guitarDots, description: "All Fifths", octave: [2, 2, 3, 3, 4, 4] },
  { tuning: "BFBFBF", dots: guitarDots, description: "Augmented Fourths", octave: [1, 2, 2, 3, 3, 4] },
  { tuning: "DADGBE", dots: guitarDots, description: "Guitar Drop D", octave: [2, 2, 3, 3, 3, 4] },
  { tuning: "DADGAD", dots: guitarDots, description: "Celtic", octave: [2, 2, 3, 3, 3, 4] },
  { tuning: "CGDAEG", dots: guitarDots, description: "Guitar Fripp NST", octave: [2, 2, 3, 3, 4, 4] },
  { tuning: "BEADGBE", dots: guitarDots, description: "Guitar 7 string", octave: [1, 2, 2, 3, 3, 3, 4] },
  { tuning: "DABEAB", dots: guitarDots, description: "Guitar Portuguese" },
  { tuning: "DGDGBD", dots: guitarDots, description: "Guitar Open G", octave: [2, 2, 3, 3, 3, 4] },
  { tuning: "EADGDG", dots: guitarDots, description: "Guitar Convert", octave: [2, 2, 3, 3, 4, 4] },
  { tuning: "E♭A♭D♭G♭B♭E♭", dots: guitarDots, description: "Guitar E♭ (Hendrix)", octave: [2, 2, 3, 3, 3, 4] },
  { tuning: "CFA♯D♯GC", dots: guitarDots, description: "C Standard", octave: [2, 2, 2, 3, 3, 4] },
  { tuning: "BEADF♯B", dots: guitarDots, description: "Baritone B", octave: [1, 2, 2, 3, 3, 3] },
  { tuning: "ADGCEA", dots: guitarDots, description: "Baritone A", octave: [1, 2, 2, 3, 3, 3] },
  { tuning: "EADG", dots: guitarDots, description: "Bass Standard", octave: [1, 1, 2, 2] },
  { tuning: "DADG", dots: guitarDots, description: "Bass Drop D", octave: [1, 1, 2, 2] },
  { tuning: "EADGC", dots: guitarDots, description: "Bass 5 Strings Standard High", octave: [1, 1, 2, 2, 3] },
  { tuning: "BEADG", dots: guitarDots, description: "Bass 5 Strings Standard Low", octave: [0, 1, 1, 2, 2] },
  { tuning: "BEADGC", dots: guitarDots, description: "Bass 6 Strings Standard", octave: [0, 1, 1, 2, 2, 3] },
  { tuning: "BEADGCF", dots: guitarDots, description: "Bass 7 Strings Standard", octave: [0, 1, 1, 2, 2, 3, 3] },
  { tuning: "DGBD", dots: guitarDots, description: "Banjo", octave: [3, 3, 3, 4] },
  { tuning: "DGBD", dots: guitarDots, description: "Cavaquinho" },
  { tuning: "GCEA", dots: guitarDots, description: "Ukulele C", octave: [4, 4, 4, 4] },
  { tuning: "CGDA", dots: violaDots, description: "Cello", octave: [2, 2, 3, 3] },
  { tuning: "GDAE", dots: violaDots, description: "Violin", octave: [3, 4, 4, 5] },
  { tuning: "CGDA", dots: violaDots, description: "Viola", octave: [3, 3, 4, 4] }
];
var tunings = buildTunings();
function parseTuning(info) {
  const tokens = [];
  const result = [];
  let tokenIndex = 0;
  let lastWasChar = false;
  for (let i = 0;i < info.tuning.length; i++) {
    const noteChar = info.tuning.charAt(i);
    if ("ABCDEFG".indexOf(noteChar) >= 0) {
      tokens[tokenIndex] = noteChar;
      tokenIndex++;
      lastWasChar = true;
    } else if ("♯♭".indexOf(noteChar) >= 0 && lastWasChar) {
      tokens[tokenIndex - 1] = tokens[tokenIndex - 1] + noteChar;
      lastWasChar = false;
    } else {
      throw new Error("Invalid tuning char");
    }
  }
  if (info.octave !== undefined && info.octave.length !== tokens.length) {
    throw new Error("octave length must match number of strings");
  }
  for (let i = 0;i < tokens.length; i++) {
    const noteName = notes.filter((x) => x.name === tokens[i]);
    if (noteName.length !== 1) {
      throw new Error("Invalid token");
    }
    result.push({ index: noteName[0].index, midiNote: indexToMIDI(noteName[0].index, info.octave?.[i] ?? 3) });
  }
  return result;
}
function buildTunings() {
  const tunings = [];
  let index = 0;
  for (const info of tuningInfos) {
    const tuning = {
      index,
      tuning: info.tuning,
      dots: info.dots,
      description: info.description,
      notes: parseTuning(info)
    };
    tunings.push(tuning);
    index++;
  }
  return tunings;
}
// src/view/guitar.ts
var stringGap = 40;
var fretGap = 70;
var fretWidth = 5;
var noteRadius = 15;
var pad = 20;
var numberOfFrets = 16;
var svgWidth = 1160;
function noteX(i) {
  return i * fretGap + pad + 30;
}
function noteClass(sn, hasToggledNotes) {
  if (sn.node.toggle) {
    return `fret-note fret-note-toggle ${sn.node.chordInterval.colour.replace("color", "stroke")}`;
  }
  if (sn.node.scaleNote.isScaleNote) {
    if (!hasToggledNotes) {
      return sn.node.scaleNote.isTonic ? "fret-note fret-note-tonic" : "fret-note fret-note-scale";
    }
    return "fret-note fret-note-dimmed";
  }
  return "fret-note";
}
function labelText(sn, labelType) {
  const visible = sn.node.scaleNote.isScaleNote || sn.node.toggle;
  if (!visible) {
    return "";
  }
  switch (labelType) {
    case "None":
      return "";
    case "NoteName":
      return sn.node.scaleNote.note.label;
    case "Interval":
      return sn.node.intervalName;
    default:
      throw new Error(`Unexpected label type: ${labelType}`);
  }
}
function allNotesFromWithNodes(stringInfo, nodeByIndex) {
  const items = [];
  for (let i = 0;i < numberOfFrets; i++) {
    const idx = (i + stringInfo.index) % 12;
    items.push({
      octave: Math.floor((i + 1) / 12),
      index: idx,
      node: nodeByIndex.get(idx) ?? nullNode,
      midiNote: stringInfo.midiNote + i
    });
  }
  return items;
}
var guitarNodes = (model, raise) => {
  const { tuningIndex, isLeftHanded, isNutFlipped, fretboardLabelType } = model.state;
  const tuningInfo = tunings[tuningIndex];
  const nodeByIndex = new Map(model.music.nodes.map((n) => [n.scaleNote.note.index, n]));
  const hasToggledNotes = model.music.nodes.some((x) => x.toggle);
  const titleContent = tuningInfo.tuning + " " + tuningInfo.description + (isLeftHanded ? ", Left Handed" : "") + (isNutFlipped ? ", Nut Flipped" : "");
  const titleNode = {
    type: "text",
    x: 30,
    y: 15,
    class: "mode-text",
    content: titleContent
  };
  const fretRects = Array.from({ length: numberOfFrets }, (_, i) => ({
    type: "rect",
    x: (i + 1) * fretGap + pad - fretWidth,
    y: pad + stringGap / 2 - fretWidth,
    width: fretWidth,
    height: stringGap * (tuningInfo.notes.length - 1) + fretWidth * 2,
    class: i === 0 ? "fret-nut" : "fret-line"
  }));
  const dotCircles = tuningInfo.dots.map(([fret, pos]) => ({
    type: "circle",
    r: 10,
    cx: fret * fretGap + pad + 30 + pos * 10,
    cy: tuningInfo.notes.length * stringGap + pad + 15,
    class: "fret-dot"
  }));
  const stringOrder = isNutFlipped ? tuningInfo.notes.slice() : tuningInfo.notes.slice().reverse();
  const stringGroups = stringOrder.map((startIndex, si) => {
    const fretNotes = allNotesFromWithNodes(startIndex, nodeByIndex);
    const stringLine = {
      type: "line",
      x1: pad + fretGap,
      y1: stringGap / 2,
      x2: pad + fretGap * numberOfFrets + 20,
      y2: stringGap / 2,
      class: "fret-string"
    };
    const noteCircles = fretNotes.map((sn, i) => ({
      type: "circle",
      r: noteRadius,
      cy: stringGap / 2,
      cx: noteX(i),
      class: noteClass(sn, hasToggledNotes),
      onClick: () => raise({ id: "Toggle", index: sn.index, midiNote: sn.midiNote })
    }));
    const noteTexts = fretNotes.map((sn, i) => {
      const x = isLeftHanded ? -noteX(i) : noteX(i);
      const transform = isLeftHanded ? "translate(0, 0) scale(-1, 1)" : "translate(0, 0) scale(1, 1)";
      return {
        type: "text",
        x,
        y: stringGap / 2 + 5,
        class: "fret-note-text",
        textAnchor: "middle",
        transform,
        content: labelText(sn, fretboardLabelType)
      };
    });
    return {
      type: "g",
      transform: `translate(0, ${si * stringGap + pad})`,
      children: [stringLine, ...noteCircles, ...noteTexts]
    };
  });
  const fretboardTransform = isLeftHanded ? "translate(1200, 0) scale(-1, 1)" : "translate(0, 0) scale(1, 1)";
  const fretboardGroup = {
    type: "g",
    transform: fretboardTransform,
    children: [{ type: "g", children: fretRects }, { type: "g", children: dotCircles }, ...stringGroups]
  };
  return [
    titleNode,
    ...settingsIconNodes(svgWidth, () => raise({ id: "ModalStateChange", modalState: "guitar-settings" })),
    fretboardGroup
  ];
};

// src/view/menu.ts
var create2 = () => {
  let uninitialised = true;
  return (_model, _raise) => {
    if (uninitialised) {
      init();
      uninitialised = false;
    }
    return [];
  };
};
function init() {
  const dropdowns = document.getElementsByClassName("dropdown");
  for (const dropdown of dropdowns) {
    const menuItem = dropdown.querySelector(".menu");
    if (menuItem) {
      menuItem.addEventListener("click", onMenuClick);
    }
  }
  document.addEventListener("mouseup", (event) => {
    const targetElement = event.target;
    if (targetElement.closest(".dropdown-content") === null && targetElement.closest(".menu") === null) {
      const contentElements = document.getElementsByClassName("dropdown-content");
      for (const contentElement of contentElements) {
        if (contentElement.classList.contains("dropdown-content-visible")) {
          contentElement.classList.remove("dropdown-content-visible");
        }
      }
    }
  });
}
function onMenuClick(event) {
  const menuElement = event.currentTarget;
  const currentContentElement = menuElement.parentElement.querySelector(".dropdown-content");
  const contentElements = document.getElementsByClassName("dropdown-content");
  for (const contentElement of contentElements) {
    if (contentElement === currentContentElement) {
      currentContentElement.classList.toggle("dropdown-content-visible");
    } else {
      contentElement.classList.remove("dropdown-content-visible");
    }
  }
}

// src/view/modal/common.ts
var MODAL_BACKDROP_CLASS = "modal-backdrop";
var MODAL_CONTAINER_CLASS = "modal-container";
function createSection(titleText) {
  const section = document.createElement("div");
  section.className = "modal-section";
  if (titleText) {
    const label = document.createElement("div");
    label.className = "modal-section-title";
    label.textContent = titleText;
    section.appendChild(label);
  }
  return section;
}
function createCheckboxLabel(text, checked) {
  const label = document.createElement("label");
  label.className = "modal-checkbox-label";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = checked;
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(` ${text}`));
  return label;
}
function createCheckbox(modal, labelText, checkboxState, onClick) {
  const section = createSection();
  const label = createCheckboxLabel(labelText, checkboxState);
  const checkbox = label.querySelector("input");
  checkbox.addEventListener("change", () => onClick(checkbox.checked));
  section.appendChild(label);
  modal.appendChild(section);
}
function createModal(modalTitle, raise) {
  const backdrop = document.createElement("div");
  backdrop.className = MODAL_BACKDROP_CLASS;
  backdrop.addEventListener("click", () => raise({ id: "ModalStateChange", modalState: "closed" }));
  const modal = document.createElement("div");
  modal.className = MODAL_CONTAINER_CLASS;
  modal.addEventListener("click", (e) => e.stopPropagation());
  const header = document.createElement("div");
  header.className = "modal-header";
  const title = document.createElement("span");
  title.textContent = modalTitle;
  const closeBtn = document.createElement("button");
  closeBtn.className = "modal-close";
  closeBtn.textContent = "×";
  closeBtn.addEventListener("click", () => raise({ id: "ModalStateChange", modalState: "closed" }));
  header.appendChild(title);
  header.appendChild(closeBtn);
  modal.appendChild(header);
  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);
  return modal;
}

// src/view/modal/circleSettings.ts
function showCircleSettings(state, raise) {
  const modal = createModal("Circle Settings", raise);
  createCheckbox(modal, "Set C To Noon", state.circleIsCNoon, (isChecked) => raise({ id: "SetCToNoon", isC: isChecked }));
}

// src/view/modal/fretboardSettings.ts
function showFretboardSettings(state, raise) {
  const modal = createModal("Fretboard Settings", raise);
  {
    const tuningSection = createSection("Tuning");
    const select = document.createElement("select");
    select.className = "modal-select";
    for (const t of tunings) {
      const opt = document.createElement("option");
      opt.value = String(t.index);
      opt.textContent = `${t.tuning}  ${t.description}`;
      if (t.index === state.tuningIndex) {
        opt.selected = true;
      }
      select.appendChild(opt);
    }
    select.addEventListener("change", () => {
      raise({ id: "TuningChanged", index: parseInt(select.value, 10) });
    });
    tuningSection.appendChild(select);
    modal.appendChild(tuningSection);
  }
  createCheckbox(modal, "Left Handed", state.isLeftHanded, (isChecked) => raise({ id: "LeftHandedFretboard", isLeftHanded: isChecked }));
  createCheckbox(modal, "Flip Nut", state.isNutFlipped, (isChecked) => raise({ id: "FlipNut", isNutFlipped: isChecked }));
  {
    const nlSection = createSection("Note Labels");
    const labelOptions = [
      { label: "None", value: "None" },
      { label: "Note Names", value: "NoteName" },
      { label: "Intervals", value: "Interval" }
    ];
    for (const opt of labelOptions) {
      const radioLabel = document.createElement("label");
      radioLabel.className = "modal-radio-label";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "modal-fb-note-text";
      radio.value = opt.value;
      radio.checked = state.fretboardLabelType === opt.value;
      radio.addEventListener("change", () => {
        raise({ id: "FretboardLabelChange", labelType: opt.value });
      });
      radioLabel.appendChild(radio);
      radioLabel.appendChild(document.createTextNode(` ${opt.label}`));
      nlSection.appendChild(radioLabel);
    }
    modal.appendChild(nlSection);
  }
}

// src/view/modal/index.ts
var MODAL_BACKDROP_CLASS2 = "modal-backdrop";
var create3 = () => {
  let previousState = "closed";
  return ({ state }, raise) => {
    if (state.modalState === previousState) {
      return [];
    }
    switch (state.modalState) {
      case "closed":
        removeExistingModal();
        break;
      case "guitar-settings":
        showModal(state, raise);
        break;
      case "circle-settings":
        showModal(state, raise);
        break;
      default: {
        const _exhaustiveCheck = state.modalState;
      }
    }
    previousState = state.modalState;
    return [];
  };
};
function removeExistingModal() {
  const existing = document.querySelector(`.${MODAL_BACKDROP_CLASS2}`);
  if (existing) {
    existing.remove();
    return true;
  }
  return false;
}
function showModal(state, raise) {
  switch (state.modalState) {
    case "closed":
      break;
    case "guitar-settings":
      showFretboardSettings(state, raise);
      break;
    case "circle-settings":
      showCircleSettings(state, raise);
      break;
    default: {
      const _exhaustiveCheck = state.modalState;
    }
  }
}

// src/view/modes.ts
function modesNodes(model, raise) {
  const scaleFamily2 = scaleFamily[model.state.scaleFamilyIndex];
  const activeMode = scaleFamily2.modes.find((m) => m.index === model.state.modeIndex);
  const children = scaleFamily2.modes.map((mode, i) => ({
    type: "buttonRow",
    row: i,
    children: [
      {
        type: "svgButton",
        class: mode.index === activeMode.index ? "mode-button mode-button-selected" : "mode-button",
        label: mode.name,
        xPos: 0,
        xSize: 3,
        onClick: () => raise({ id: "ModeChanged", mode })
      }
    ]
  }));
  return [{ type: "g", transform: "translate(0, 275)", children }];
}

// src/defaultState.ts
var defaultState = Object.freeze({
  index: 3,
  naturalIndex: 3,
  chordIndex: -1,
  chordIntervals: [0, 2, 4],
  toggledNotesBitmask: 0,
  scaleFamilyIndex: 0,
  modeIndex: 0,
  midiToggledNotesBitmask: 0,
  isLeftHanded: false,
  isNutFlipped: false,
  fretboardLabelType: "NoteName",
  circleIsCNoon: true,
  tuningIndex: 0,
  modalState: "closed",
  sound: true,
  theme: "light"
});

// src/view/permalink.ts
var PERMALINK_BUTTON_ID = "permalink-button";
var PERMALINK_TEXT_ID = "permalink-text";
var view = ({ state }, _raise) => {
  const permalinkButton = document.getElementById(PERMALINK_BUTTON_ID);
  if (permalinkButton) {
    permalinkButton.onclick = () => populatePermalinkText(state);
  }
  return [];
};
function populatePermalinkText(state) {
  const permalink = generatePermalink(state);
  const inputbox = document.getElementById(PERMALINK_TEXT_ID);
  inputbox.value = permalink;
  navigator.clipboard.writeText(permalink);
}
function generatePermalink(state) {
  const params = new URLSearchParams;
  const keys = Object.keys(state);
  for (const key of keys) {
    if (state[key] !== defaultState[key]) {
      params.append(key, state[key].toString());
    }
  }
  const queryString = params.size === 0 ? "" : `?${params.toString()}`;
  return `${location.protocol}//${location.host}${location.pathname}${queryString}`;
}
function updateStateFromQuerystring(existingState) {
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const mutableState = { ...existingState };
  const keys = Object.keys(existingState);
  try {
    for (const x of keys) {
      const value = params.get(x);
      if (value == null) {
        continue;
      }
      switch (typeof mutableState[x]) {
        case "boolean":
          mutableState[x] = value === "true";
          break;
        case "number":
          mutableState[x] = parseInt(value, 10);
          break;
        case "object":
          mutableState[x] = JSON.parse(`[${value}]`);
          break;
        case "string":
          mutableState[x] = value;
          break;
      }
    }
  } catch (e) {
    console.log(`Error reading query string: ${e}`);
    return existingState;
  }
  return mutableState;
}

// src/view/scale-family.ts
var scaleFamilySelectNodes = (model, raise) => {
  const currentFamily = scaleFamily[model.state.scaleFamilyIndex];
  return [
    {
      type: "selectHtml",
      x: 5,
      y: 5,
      width: 150,
      height: 25,
      class: "scale-family-select",
      options: scaleFamily.map((sf) => ({ value: String(sf.index), label: sf.name })),
      selectedValue: String(currentFamily.index),
      onChange: (value) => {
        const sf = scaleFamily.find((x) => String(x.index) === value);
        if (sf) {
          raise({ id: "ScaleFamilyChange", scaleFamily: sf });
        }
      }
    }
  ];
};

// src/view/speaker.ts
var SPEAKER_BTN_ID = "speaker-btn";
var SPEAKER_ICON_ID = "speaker-icon";
var create4 = () => {
  let uninitialised = true;
  return ({ state }, raise) => {
    const icon = document.getElementById(SPEAKER_ICON_ID);
    if (icon) {
      icon.setAttribute("href", state.sound ? "#icon-speaker-wave" : "#icon-speaker-x");
    }
    if (uninitialised) {
      const btn = document.getElementById(SPEAKER_BTN_ID);
      if (btn) {
        btn.addEventListener("click", () => raise({ id: "ToggleSound" }));
      }
      uninitialised = false;
    }
    return [];
  };
};

// node_modules/zod/v4/core/core.js
var NEVER = Object.freeze({
  status: "aborted"
});
function $constructor(name, initializer, params) {
  function init(inst, def) {
    if (!inst._zod) {
      Object.defineProperty(inst, "_zod", {
        value: {
          def,
          constr: _,
          traits: new Set
        },
        enumerable: false
      });
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer(inst, def);
    const proto = _.prototype;
    const keys = Object.keys(proto);
    for (let i = 0;i < keys.length; i++) {
      const k = keys[i];
      if (!(k in inst)) {
        inst[k] = proto[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;

  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a;
    const inst = params?.Parent ? new Definition : this;
    init(inst, def);
    (_a = inst._zod).deferred ?? (_a.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
var $brand = Symbol("zod_brand");

class $ZodAsyncError extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
}

class $ZodEncodeError extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`);
    this.name = "ZodEncodeError";
  }
}
var globalConfig = {};
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}
// node_modules/zod/v4/core/util.js
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached(getter) {
  const set = false;
  return {
    get value() {
      if (!set) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish(input) {
  return input === null || input === undefined;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepString = step.toString();
  let stepDecCount = (stepString.split(".")[1] || "").length;
  if (stepDecCount === 0 && /\d?e-\d?/.test(stepString)) {
    const match = stepString.match(/\d?e-(\d?)/);
    if (match?.[1]) {
      stepDecCount = Number.parseInt(match[1]);
    }
  }
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var EVALUATING = Symbol("evaluating");
function defineLazy(object, key, getter) {
  let value = undefined;
  Object.defineProperty(object, key, {
    get() {
      if (value === EVALUATING) {
        return;
      }
      if (value === undefined) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object, key, {
        value: v
      });
    },
    configurable: true
  });
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function esc(str) {
  return JSON.stringify(str);
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = cached(() => {
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === undefined)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  return o;
}
var propertyKeyTypes = new Set(["string", "number", "symbol"]);
var primitiveTypes = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== undefined) {
    if (params?.error !== undefined)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = {};
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        newShape[key] = currDef.shape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = { ...schema._zod.def.shape };
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        delete newShape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = schema._zod.def.shape;
    for (const key in shape) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== undefined) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function merge(a, b) {
  const def = mergeDefs(a._zod.def, {
    get shape() {
      const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: []
  });
  return clone(a, def);
}
function partial(Class, schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in oldShape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = Class ? new Class({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      } else {
        for (const key in oldShape) {
          shape[key] = Class ? new Class({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function required(Class, schema, mask) {
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = new Class({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      } else {
        for (const key in oldShape) {
          shape[key] = new Class({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    }
  });
  return clone(schema, def);
}
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex;i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a;
    (_a = iss).path ?? (_a.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config) {
  const full = { ...iss, path: iss.path ?? [] };
  if (!iss.message) {
    const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
    full.message = message;
  }
  delete full.inst;
  delete full.continue;
  if (!ctx?.reportInput) {
    delete full.input;
  }
  return full;
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}

// node_modules/zod/v4/core/errors.js
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
  Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: false
  });
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
function flattenError(error, mapper = (issue) => issue.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error, mapper = (issue) => issue.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error) => {
    for (const issue of error.issues) {
      if (issue.code === "invalid_union" && issue.errors.length) {
        issue.errors.map((issues) => processError({ issues }));
      } else if (issue.code === "invalid_key") {
        processError({ issues: issue.issues });
      } else if (issue.code === "invalid_element") {
        processError({ issues: issue.issues });
      } else if (issue.path.length === 0) {
        fieldErrors._errors.push(mapper(issue));
      } else {
        let curr = fieldErrors;
        let i = 0;
        while (i < issue.path.length) {
          const el = issue.path[i];
          const terminal = i === issue.path.length - 1;
          if (!terminal) {
            curr[el] = curr[el] || { _errors: [] };
          } else {
            curr[el] = curr[el] || { _errors: [] };
            curr[el]._errors.push(mapper(issue));
          }
          curr = curr[el];
          i++;
        }
      }
    }
  };
  processError(error);
  return fieldErrors;
}

// node_modules/zod/v4/core/parse.js
var _parse = (_Err) => (schema, value, _ctx, _params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  if (result.issues.length) {
    const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, _params?.callee);
    throw e;
  }
  return result.value;
};
var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  if (result.issues.length) {
    const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, params?.callee);
    throw e;
  }
  return result.value;
};
var _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);
var _encode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parse(_Err)(schema, value, ctx);
};
var _decode = (_Err) => (schema, value, _ctx) => {
  return _parse(_Err)(schema, value, _ctx);
};
var _encodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parseAsync(_Err)(schema, value, ctx);
};
var _decodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _parseAsync(_Err)(schema, value, _ctx);
};
var _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
var _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};
// node_modules/zod/v4/core/regexes.js
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
var integer = /^-?\d+$/;
var number = /^-?\d+(?:\.\d+)?$/;
var boolean = /^(?:true|false)$/i;

// node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a = inst._zod).onattach ?? (_a.onattach = []);
});
var numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst) => {
    const bag = inst._zod.bag;
    const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (def.value < curr) {
      if (def.inclusive)
        bag.maximum = def.value;
      else
        bag.exclusiveMaximum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst) => {
    const bag = inst._zod.bag;
    const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (def.value > curr) {
      if (def.inclusive)
        bag.minimum = def.value;
      else
        bag.exclusiveMinimum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst) => {
    var _a;
    (_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
  });
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst) => {
    const bag = inst._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
    if (isInt)
      bag.pattern = integer;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: false,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== undefined;
  });
  inst._zod.onattach.push((inst) => {
    const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== undefined;
  });
  inst._zod.onattach.push((inst) => {
    const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== undefined;
  });
  inst._zod.onattach.push((inst) => {
    const bag = inst._zod.bag;
    bag.minimum = def.length;
    bag.maximum = def.length;
    bag.length = def.length;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// node_modules/zod/v4/core/doc.js
class Doc {
  constructor(args = []) {
    this.content = [];
    this.indent = 0;
    if (this)
      this.args = args;
  }
  indented(fn) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split(`
`).filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const args = this?.args;
    const content = this?.content ?? [``];
    const lines = [...content.map((x) => `  ${x}`)];
    return new F(...args, lines.join(`
`));
  }
}

// node_modules/zod/v4/core/versions.js
var version = {
  major: 4,
  minor: 3,
  patch: 6
};

// node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const checks = [...inst._zod.def.checks ?? []];
  if (inst._zod.traits.has("$ZodCheck")) {
    checks.unshift(inst);
  }
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a = inst._zod).deferred ?? (_a.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks, ctx) => {
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks) {
        if (ch._zod.def.when) {
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError;
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError;
        return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary) => {
            return handleCanaryResult(canary, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError;
        return result.then((result) => runChecks(result, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
  defineLazy(inst, "~standard", () => ({
    validate: (value) => {
      try {
        const r = safeParse(inst, value);
        return r.success ? { value: r.data } : { issues: r.error?.issues };
      } catch (_) {
        return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = inst._zod.bag.pattern ?? number;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {}
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : undefined : undefined;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def);
  $ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = boolean;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {}
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = Array(input.length);
    const proms = [];
    for (let i = 0;i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result) => handleArrayResult(result, payload, i)));
      } else {
        handleArrayResult(result, payload, i);
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handlePropertyResult(result, final, key, input, isOptionalOut) {
  if (result.issues.length) {
    if (isOptionalOut && !(key in input)) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (result.value === undefined) {
    if (key in input) {
      final.value[key] = undefined;
    }
  } else {
    final.value[key] = result.value;
  }
}
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  for (const k of keys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const isOptionalOut = _catchall.optout === "optional";
  for (const key in input) {
    if (keySet.has(key))
      continue;
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalOut)));
    } else {
      handlePropertyResult(r, payload, key, input, isOptionalOut);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  if (!desc?.get) {
    const sh = def.shape;
    Object.defineProperty(def, "shape", {
      get: () => {
        const newSh = { ...sh };
        Object.defineProperty(def, "shape", {
          value: newSh
        });
        return newSh;
      }
    });
  }
  const _normalized = cached(() => normalizeDef(def));
  defineLazy(inst._zod, "propValues", () => {
    const shape = def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        propValues[key] ?? (propValues[key] = new Set);
        for (const v of field.values)
          propValues[key].add(v);
      }
    }
    return propValues;
  });
  const isObject2 = isObject;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = {};
    const proms = [];
    const shape = value.shape;
    for (const key of value.keys) {
      const el = shape[key];
      const isOptionalOut = el._zod.optout === "optional";
      const r = el._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalOut)));
      } else {
        handlePropertyResult(r, payload, key, input, isOptionalOut);
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
  };
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached(() => normalizeDef(def));
  const generateFastpass = (shape) => {
    const doc = new Doc(["shape", "payload", "ctx"]);
    const normalized = _normalized.value;
    const parseStr = (key) => {
      const k = esc(key);
      return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    };
    doc.write(`const input = payload.value;`);
    const ids = Object.create(null);
    let counter = 0;
    for (const key of normalized.keys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(`const newResult = {};`);
    for (const key of normalized.keys) {
      const id = ids[key];
      const k = esc(key);
      const schema = shape[key];
      const isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(`const ${id} = ${parseStr(key)};`);
      if (isOptionalOut) {
        doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
      } else {
        doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    const fn = doc.compile();
    return (payload, ctx) => fn(shape, payload, ctx);
  };
  let fastpass;
  const isObject2 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval2 = allowsEval;
  const fastEnabled = jit && allowsEval2.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall)
        return payload;
      return handleCatchall([], input, payload, ctx, value, inst);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : undefined);
  defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : undefined);
  defineLazy(inst._zod, "values", () => {
    if (def.options.every((o) => o._zod.values)) {
      return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return;
  });
  defineLazy(inst._zod, "pattern", () => {
    if (def.options.every((o) => o._zod.pattern)) {
      const patterns = def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
    return;
  });
  const single = def.options.length === 1;
  const first = def.options[0]._zod.run;
  inst._zod.parse = (payload, ctx) => {
    if (single) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results) => {
      return handleUnionResults(results, payload, inst, ctx);
    });
  };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left, right]) => {
        return handleIntersectionResults(payload, left, right);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = new Map;
  let unrecIssue;
  for (const iss of left.issues) {
    if (iss.code === "unrecognized_keys") {
      unrecIssue ?? (unrecIssue = iss);
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).l = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  for (const iss of right.issues) {
    if (iss.code === "unrecognized_keys") {
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).r = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length && unrecIssue) {
    result.issues.push({ ...unrecIssue, keys: bothKeys });
  }
  if (aborted(result))
    return result;
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    throw new Error(`Unmergable intersection. Error path: ` + `${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output) => {
        payload.value = output;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError;
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult(result, input) {
  if (result.issues.length && input === undefined) {
    return { issues: [], value: undefined };
  }
  return result;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? new Set([...def.innerType._zod.values, undefined]) : undefined;
  });
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    if (def.innerType._zod.optin === "optional") {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise)
        return result.then((r) => handleOptionalResult(r, payload.value));
      return handleOptionalResult(result, payload.value);
    }
    if (payload.value === undefined) {
      return payload;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : undefined;
  });
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === undefined) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result) => handleDefaultResult(result, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === undefined) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === undefined) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => {
    const v = def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== undefined)) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result) => handleNonOptionalResult(result, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === undefined) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result) => {
        payload.value = result.value;
        if (result.issues.length) {
          payload.value = def.catchValue({
            ...payload,
            error: {
              issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
            },
            input: payload.value
          });
          payload.issues = [];
        }
        return payload;
      });
    }
    payload.value = result.value;
    if (result.issues.length) {
      payload.value = def.catchValue({
        ...payload,
        error: {
          issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
        },
        input: payload.value
      });
      payload.issues = [];
    }
    return payload;
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right) => handlePipeResult(right, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left) => handlePipeResult(left, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
  defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r) => handleRefineResult(r, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      path: [...inst._zod.def.path ?? []],
      continue: !inst._zod.def.abort
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}
// node_modules/zod/v4/core/registries.js
var _a;
var $output = Symbol("ZodOutput");
var $input = Symbol("ZodInput");

class $ZodRegistry {
  constructor() {
    this._map = new WeakMap;
    this._idmap = new Map;
  }
  add(schema, ..._meta) {
    const meta = _meta[0];
    this._map.set(schema, meta);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.set(meta.id, schema);
    }
    return this;
  }
  clear() {
    this._map = new WeakMap;
    this._idmap = new Map;
    return this;
  }
  remove(schema) {
    const meta = this._map.get(schema);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.delete(meta.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : undefined;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
}
function registry() {
  return new $ZodRegistry;
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;
// node_modules/zod/v4/core/api.js
function _number(Class, params) {
  return new Class({
    type: "number",
    checks: [],
    ...normalizeParams(params)
  });
}
function _int(Class, params) {
  return new Class({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
function _boolean(Class, params) {
  return new Class({
    type: "boolean",
    ...normalizeParams(params)
  });
}
function _unknown(Class) {
  return new Class({
    type: "unknown"
  });
}
function _never(Class, params) {
  return new Class({
    type: "never",
    ...normalizeParams(params)
  });
}
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
function _array(Class, element, params) {
  return new Class({
    type: "array",
    element,
    ...normalizeParams(params)
  });
}
function _refine(Class, fn, _params) {
  const schema = new Class({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
function _superRefine(fn) {
  const ch = _check((payload) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, ch._zod.def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  });
  return ch;
}
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
// node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {}),
    io: params?.io ?? "output",
    counter: 0,
    seen: new Map,
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    external: params?.external ?? undefined
  };
}
function process(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: undefined, path: _params.path };
  ctx.seen.set(schema, result);
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      process(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta = ctx.metadataRegistry.get(schema);
  if (meta)
    Object.assign(result.schema, meta);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && result.schema._prefault)
    (_a = result.schema).default ?? (_a.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const idToSchema = new Map;
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id) => id);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
    }
    if (entry[1] === root) {
      return { ref: "#" };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + defId };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema = seen.schema;
    for (const key in schema) {
      delete schema[key];
    }
    schema.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error("Cycle detected: " + `#/${seen.cycle?.join("/")}/<root>` + '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema = seen.def ?? seen.schema;
    const _cached = { ...schema };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema.allOf = schema.allOf ?? [];
        schema.allOf.push(refSchema);
      } else {
        Object.assign(schema, refSchema);
      }
      Object.assign(schema, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema,
      path: seen.path ?? []
    });
  };
  for (const entry of [...ctx.seen.entries()].reverse()) {
    flattenRef(entry[0]);
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {}
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  Object.assign(result, root.def ?? root.schema);
  const defs = ctx.external?.defs ?? {};
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (seen.def && seen.defId) {
      defs[seen.defId] = seen.def;
    }
  }
  if (ctx.external) {} else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: new Set };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  process(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  process(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
// node_modules/zod/v4/core/json-schema-processors.js
var numberProcessor = (schema, ctx, _json, _params) => {
  const json = _json;
  const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
  if (typeof format === "string" && format.includes("int"))
    json.type = "integer";
  else
    json.type = "number";
  if (typeof exclusiveMinimum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.minimum = exclusiveMinimum;
      json.exclusiveMinimum = true;
    } else {
      json.exclusiveMinimum = exclusiveMinimum;
    }
  }
  if (typeof minimum === "number") {
    json.minimum = minimum;
    if (typeof exclusiveMinimum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMinimum >= minimum)
        delete json.minimum;
      else
        delete json.exclusiveMinimum;
    }
  }
  if (typeof exclusiveMaximum === "number") {
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.maximum = exclusiveMaximum;
      json.exclusiveMaximum = true;
    } else {
      json.exclusiveMaximum = exclusiveMaximum;
    }
  }
  if (typeof maximum === "number") {
    json.maximum = maximum;
    if (typeof exclusiveMaximum === "number" && ctx.target !== "draft-04") {
      if (exclusiveMaximum <= maximum)
        delete json.maximum;
      else
        delete json.exclusiveMaximum;
    }
  }
  if (typeof multipleOf === "number")
    json.multipleOf = multipleOf;
};
var booleanProcessor = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
};
var neverProcessor = (_schema, _ctx, json, _params) => {
  json.not = {};
};
var unknownProcessor = (_schema, _ctx, _json, _params) => {};
var enumProcessor = (schema, _ctx, json, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.every((v) => typeof v === "number"))
    json.type = "number";
  if (values.every((v) => typeof v === "string"))
    json.type = "string";
  json.enum = values;
};
var customProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Custom types cannot be represented in JSON Schema");
  }
};
var transformProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Transforms cannot be represented in JSON Schema");
  }
};
var arrayProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
  json.type = "array";
  json.items = process(def.element, ctx, { ...params, path: [...params.path, "items"] });
};
var objectProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "object";
  json.properties = {};
  const shape = def.shape;
  for (const key in shape) {
    json.properties[key] = process(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    });
  }
  const allKeys = new Set(Object.keys(shape));
  const requiredKeys = new Set([...allKeys].filter((key) => {
    const v = def.shape[key]._zod;
    if (ctx.io === "input") {
      return v.optin === undefined;
    } else {
      return v.optout === undefined;
    }
  }));
  if (requiredKeys.size > 0) {
    json.required = Array.from(requiredKeys);
  }
  if (def.catchall?._zod.def.type === "never") {
    json.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json.additionalProperties = false;
  } else if (def.catchall) {
    json.additionalProperties = process(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i) => process(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json.oneOf = options;
  } else {
    json.anyOf = options;
  }
};
var intersectionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const a = process(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = process(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => ("allOf" in val) && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json.allOf = allOf;
};
var nullableProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const inner = process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json.nullable = true;
  } else {
    json.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var defaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.default = JSON.parse(JSON.stringify(def.defaultValue));
};
var prefaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io === "input")
    json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
var catchProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(undefined);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const innerType = ctx.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
  process(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.readOnly = true;
};
var optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
// node_modules/zod/v4/classic/errors.js
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: (mapper) => formatError(inst, mapper)
    },
    flatten: {
      value: (mapper) => flattenError(inst, mapper)
    },
    addIssue: {
      value: (issue) => {
        inst.issues.push(issue);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
    },
    addIssues: {
      value: (issues) => {
        inst.issues.push(...issues);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
    }
  });
};
var ZodError = $constructor("ZodError", initializer2);
var ZodRealError = $constructor("ZodError", initializer2, {
  Parent: Error
});

// node_modules/zod/v4/classic/parse.js
var parse3 = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode = /* @__PURE__ */ _encode(ZodRealError);
var decode = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// node_modules/zod/v4/classic/schemas.js
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  $ZodType.init(inst, def);
  Object.assign(inst["~standard"], {
    jsonSchema: {
      input: createStandardJSONSchemaMethod(inst, "input"),
      output: createStandardJSONSchemaMethod(inst, "output")
    }
  });
  inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
  inst.def = def;
  inst.type = def.type;
  Object.defineProperty(inst, "_def", { value: def });
  inst.check = (...checks) => {
    return inst.clone(mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...checks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), {
      parent: true
    });
  };
  inst.with = inst.check;
  inst.clone = (def, params) => clone(inst, def, params);
  inst.brand = () => inst;
  inst.register = (reg, meta) => {
    reg.add(inst, meta);
    return inst;
  };
  inst.parse = (data, params) => parse3(inst, data, params, { callee: inst.parse });
  inst.safeParse = (data, params) => safeParse2(inst, data, params);
  inst.parseAsync = async (data, params) => parseAsync2(inst, data, params, { callee: inst.parseAsync });
  inst.safeParseAsync = async (data, params) => safeParseAsync2(inst, data, params);
  inst.spa = inst.safeParseAsync;
  inst.encode = (data, params) => encode(inst, data, params);
  inst.decode = (data, params) => decode(inst, data, params);
  inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
  inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
  inst.safeEncode = (data, params) => safeEncode(inst, data, params);
  inst.safeDecode = (data, params) => safeDecode(inst, data, params);
  inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
  inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
  inst.refine = (check, params) => inst.check(refine(check, params));
  inst.superRefine = (refinement) => inst.check(superRefine(refinement));
  inst.overwrite = (fn) => inst.check(_overwrite(fn));
  inst.optional = () => optional(inst);
  inst.exactOptional = () => exactOptional(inst);
  inst.nullable = () => nullable(inst);
  inst.nullish = () => optional(nullable(inst));
  inst.nonoptional = (params) => nonoptional(inst, params);
  inst.array = () => array(inst);
  inst.or = (arg) => union([inst, arg]);
  inst.and = (arg) => intersection(inst, arg);
  inst.transform = (tx) => pipe(inst, transform(tx));
  inst.default = (def) => _default(inst, def);
  inst.prefault = (def) => prefault(inst, def);
  inst.catch = (params) => _catch(inst, params);
  inst.pipe = (target) => pipe(inst, target);
  inst.readonly = () => readonly(inst);
  inst.describe = (description) => {
    const cl = inst.clone();
    globalRegistry.add(cl, { description });
    return cl;
  };
  Object.defineProperty(inst, "description", {
    get() {
      return globalRegistry.get(inst)?.description;
    },
    configurable: true
  });
  inst.meta = (...args) => {
    if (args.length === 0) {
      return globalRegistry.get(inst);
    }
    const cl = inst.clone();
    globalRegistry.add(cl, args[0]);
    return cl;
  };
  inst.isOptional = () => inst.safeParse(undefined).success;
  inst.isNullable = () => inst.safeParse(null).success;
  inst.apply = (fn) => fn(inst);
  return inst;
});
var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
  $ZodNumber.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
  inst.gt = (value, params) => inst.check(_gt(value, params));
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.lt = (value, params) => inst.check(_lt(value, params));
  inst.lte = (value, params) => inst.check(_lte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  inst.int = (params) => inst.check(int(params));
  inst.safe = (params) => inst.check(int(params));
  inst.positive = (params) => inst.check(_gt(0, params));
  inst.nonnegative = (params) => inst.check(_gte(0, params));
  inst.negative = (params) => inst.check(_lt(0, params));
  inst.nonpositive = (params) => inst.check(_lte(0, params));
  inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
  inst.step = (value, params) => inst.check(_multipleOf(value, params));
  inst.finite = () => inst;
  const bag = inst._zod.bag;
  inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
  inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
  inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
  inst.isFinite = true;
  inst.format = bag.format ?? null;
});
function number2(params) {
  return _number(ZodNumber, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def);
  ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean2(params) {
  return _boolean(ZodBoolean, params);
}
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
  return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
  return _never(ZodNever, params);
}
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
  inst.element = def.element;
  inst.min = (minLength, params) => inst.check(_minLength(minLength, params));
  inst.nonempty = (params) => inst.check(_minLength(1, params));
  inst.max = (maxLength, params) => inst.check(_maxLength(maxLength, params));
  inst.length = (len, params) => inst.check(_length(len, params));
  inst.unwrap = () => inst.element;
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  $ZodObjectJIT.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
  defineLazy(inst, "shape", () => {
    return def.shape;
  });
  inst.keyof = () => _enum(Object.keys(inst._zod.def.shape));
  inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall });
  inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
  inst.strip = () => inst.clone({ ...inst._zod.def, catchall: undefined });
  inst.extend = (incoming) => {
    return extend(inst, incoming);
  };
  inst.safeExtend = (incoming) => {
    return safeExtend(inst, incoming);
  };
  inst.merge = (other) => merge(inst, other);
  inst.pick = (mask) => pick(inst, mask);
  inst.omit = (mask) => omit(inst, mask);
  inst.partial = (...args) => partial(ZodOptional, inst, args[0]);
  inst.required = (...args) => required(ZodNonOptional, inst, args[0]);
});
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...normalizeParams(params)
  };
  return new ZodObject(def);
}
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
  inst.enum = def.entries;
  inst.options = Object.values(def.entries);
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output) => {
        payload.value = output;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
  });
}
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn) {
  return _superRefine(fn);
}
// src/types.ts
var FretboardLabelTypeSchema = _enum(["None", "NoteName", "Interval"]);
var ModalStateSchema = _enum(["closed", "guitar-settings", "circle-settings"]);
var ThemeSchema = _enum(["light", "dark"]);
var StateSchema = object({
  index: number2(),
  naturalIndex: number2(),
  chordIndex: number2(),
  chordIntervals: array(number2()),
  toggledNotesBitmask: number2(),
  scaleFamilyIndex: number2(),
  modeIndex: number2(),
  midiToggledNotesBitmask: number2(),
  isLeftHanded: boolean2(),
  isNutFlipped: boolean2(),
  fretboardLabelType: FretboardLabelTypeSchema,
  circleIsCNoon: boolean2(),
  tuningIndex: number2(),
  modalState: ModalStateSchema,
  sound: boolean2(),
  theme: ThemeSchema
});

// src/view/storage.ts
var STORAGE_KEY = "app_state";
var view2 = ({ state }, _raise) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.log(`Could not store state in local storage: ${e}`);
  }
  return [];
};
var getStateFromLocalStorage = () => {
  const stateString = localStorage.getItem(STORAGE_KEY);
  if (!stateString) {
    return { ...defaultState };
  }
  const parsed = StateSchema.safeParse(JSON.parse(stateString));
  if (!parsed.success) {
    console.log("Invalid storage state:", parsed.error.message);
    return { ...defaultState };
  }
  return parsed.data;
};

// src/view/theme.ts
var THEME_BTN_ID = "theme-btn";
var THEME_ICON_ID = "theme-icon";
var create5 = () => {
  let uninitialised = true;
  return ({ state }, raise) => {
    const icon = document.getElementById(THEME_ICON_ID);
    if (icon) {
      icon.setAttribute("href", (() => {
        switch (state.theme) {
          case "light":
            setTheme(state.theme);
            return "#icon-theme-light";
          case "dark":
            setTheme(state.theme);
            return "#icon-theme-dark";
          default: {
            const _exhaustiveCheck = state.theme;
            return _exhaustiveCheck;
          }
        }
      })());
    }
    if (uninitialised) {
      const btn = document.getElementById(THEME_BTN_ID);
      if (btn) {
        btn.addEventListener("click", () => raise({ id: "Theme", theme: state.theme }));
      }
      uninitialised = false;
    }
    return [];
  };
};
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

// src/view/tonics.ts
function tonicsNodes(model, raise) {
  const selectedNoteSpec = createNoteSpec(model.state.naturalIndex, model.state.index);
  const children = naturals.map((natural, i) => ({
    type: "buttonRow",
    row: i,
    children: bg(natural).map((data, j) => ({
      type: "svgButton",
      class: tonicButtonClass(data.noteSpec, selectedNoteSpec),
      label: data.noteSpec.label,
      xPos: j,
      xSize: 1,
      onClick: () => raise({ id: "TonicChanged", noteSpec: data.noteSpec })
    }))
  }));
  return [{ type: "g", transform: "translate(0, 30)", children }];
}
function tonicButtonClass(noteSpec, selectedNoteSpec) {
  if (noteSpec.label === selectedNoteSpec.label) {
    return "tonic-button tonic-button-selected";
  }
  if (isSameNoteAsNatural(noteSpec)) {
    return "tonic-button tonic-button-grey";
  }
  return "tonic-button";
}
function bg(natural) {
  const flatIndex = natural.index === 0 ? 11 : natural.index - 1;
  const sharpIndex = (natural.index + 1) % 12;
  return [
    { noteSpec: createNoteSpec(natural.index, flatIndex) },
    { noteSpec: createNoteSpec(natural.index, natural.index) },
    { noteSpec: createNoteSpec(natural.index, sharpIndex) }
  ];
}
function isSameNoteAsNatural(noteSpec) {
  return naturals.some((x) => x.index === noteSpec.index && x.index !== noteSpec.natural.index);
}

// src/view/index.ts
var modesPanelView = (model, raise) => [
  ...scaleFamilySelectNodes(model, raise),
  ...tonicsNodes(model, raise),
  ...chordIntervalNodes(model, raise),
  ...modesNodes(model, raise)
];
var svgViews = [
  { containerId: "modes", view: modesPanelView },
  {
    containerId: "chromatic",
    view: circleNodes(chromatic(), "Chromatic", 500)
  },
  {
    containerId: "cof",
    view: circleNodes(fifths(), "Circle of Fifths", 500)
  },
  { containerId: "gtr", view: guitarNodes },
  { containerId: "no-op", view: create2() },
  { containerId: "no-op", view: create4() },
  { containerId: "no-op", view: create5() },
  { containerId: "no-op", view: view2 },
  { containerId: "no-op", view },
  { containerId: "no-op", view: create3() }
];
var createViews = () => {
  return (model, raise) => {
    for (const { containerId, view } of svgViews) {
      const container = document.getElementById(containerId);
      if (container) {
        renderToSvg(container, view(model, raise));
      }
    }
  };
};

// src/wakelock.ts
var lock;
function setWakeLock() {
  if (!("wakeLock" in navigator)) {
    return;
  }
  if (document.visibilityState === "visible") {
    tryAcquireWakeLock();
  }
  document.addEventListener("visibilitychange", async () => {
    if (lock !== null && document.visibilityState === "visible") {
      await tryAcquireWakeLock();
    }
  });
}
async function tryAcquireWakeLock() {
  try {
    lock = await navigator.wakeLock.request("screen");
  } catch (_e) {
    console.log("Could not aquire wake lock");
  }
}

// src/index.ts
var initModel = () => {
  const state = updateStateFromQuerystring(getStateFromLocalStorage());
  return updateScale(state);
};
var main = () => {
  let model = initModel();
  const view = createViews();
  const raise = (msg) => {
    model = update(model, msg);
    service(model, msg, raise);
    view(model, raise);
  };
  view(model, raise);
  setWakeLock();
};
main();

//# debugId=92C0DB62A0A38DB064756E2164756E21
//# sourceMappingURL=gtr-cof.js.map
