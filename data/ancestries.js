import { size, action_type } from '../models/enums'


export const ancestries = [{
  "name": "Dwarf",
  "start_hp": 10,
  "size": size.Medium,
  "speed": 20,
  "ability_boosts": ['CON', 'WIS', 'FREE'],
  "ability_flaws": 'CHA',
  "languages": ['Common', 'Dwarven'],
  "optional_langs": ['Gnomish', 'Goblin', 'Jotun', 'Orcish', 'Terran', 'Undercommon'],
  "traits": ['Dwarf', "Humanoid"]
}]

export const heritages = [
  {
    "name": 'Ancient-Blooded Dwarf',
    "ancestry_id": 1,
    "desc": 'Dwarven heroes of old could shrug off gtheir enemies\' magic, and some of that resistance manifests in you. You gain the Call on Ancient Blood reaction',
    "actions": [1]
  },
  {
    "name": 'Death Warden Dwarf',
    "ancestry_id": 1,
    "desc": 'Your ancestors have been tomb gaurdians for generations, and the power they cultivated to ward off necromancy has been passed on to you roll a success on a saving throw against a necromancy effect, you get a critical success instead.',
    "actions": null
  },
  {
    "name": 'Forge Dwarf',
    "ancestry_id": 1,
    "desc": 'You have a remarkable adaptation to hot environments from ancestors who inhabited blazing deserts or volcanic chambersbeneath the earth. This grants you fire resistance equal to half your level (min of 1), and you threat envronmental heat effects as if they were one step less extreme (incredible heat becomes extreme extreme heat becomes severe and so on.',
    "actions": null
  },
  {
    "name": 'Rock Dwarf',
    "ancestry_id": 1,
    "desc": 'Your ancestors have been tomb gaurdians for generations, and the power they cultivated to ward off necromancy has been passed on to you roll a success on a saving throw against a necromancy effect, you get a critical success instead.',
    "actions": null
  },
  {
    "name": 'Strong-Blooded Dwarf',
    "ancestry_id": 1,
    "desc": 'Your ancestors have been tomb gaurdians for generations, and the power they cultivated to ward off necromancy has been passed on to you roll a success on a saving throw against a necromancy effect, you get a critical success instead.',
    "actions": null
  },
]

export const heritage_actions = [{
  "heritage_id": 1,
  "name": 'Call on Ancient Blood',
  "action_type": action_type.Reaction,
  "trigger": 'You attempt a saving throw against a magical effect, but you have not rolled yet.',
  "desc": 'Your ancestor\'s innate resistance to magic surges, before slowly ebbing down. You gain a +1 circumstance bounus until the end of this turn. This bonus applies to the triggering save.'
}]

