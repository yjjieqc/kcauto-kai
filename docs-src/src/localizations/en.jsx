import React from 'react'
import * as urls from 'urls'

export const en = {
  label: 'English',
  bodyConfig: {
    generalHeader: 'General',
    generalProgram: 'Program',
    generalProgramDesc: 'Program that Kantai Collection is running in (ex: Chrome)',
    generalJSTOffset: 'JST Offset',
    generalJSTOffsetDesc: 'Hours offset from JST',
    scheduledSleepHeader: 'Scheduled Sleep',
    scheduledSleepStartTime: 'Start Time',
    scheduledSleepLength: 'Length',
    scheduledSleepLengthDesc: 'How long to sleep for',
    expeditionsHeader: 'Expeditions',
    expeditionsFleet2: 'Fleet 2',
    expeditionsFleet3: 'Fleet 3',
    expeditionsFleet4: 'Fleet 4',
    pvpHeader: 'PvP',
    combatHeader: 'Combat',
    combatEngine: 'Engine',
    combatEngineLegacy: 'legacy: per-node definition of formations and night battles / low CPU use',
    combatEngineLive: 'live: auto node detection with optional formation and night battle overrides / high CPU use',
    combatMap: 'Map',
    combatFleetMode: 'Fleet Mode',
    combatFleetModeStandard: 'Standard',
    combatFleetModeCTF: 'CTF',
    combatFleetModeSTF: 'STF',
    combatFleetModeTransport: 'Transport',
    combatFleetModeStriking: 'Striking',
    combatCombatNodeCount: 'Combat Node Count',
    combatNodeSelect1: 'If at this Node...',
    combatNodeSelect2: '...select this Node',
    combatNodeSelectAdd: 'Add',
    combatNodeSelects: 'All Node Selects',
    combatCustomFormation1: 'If at this Node...',
    combatCustomFormation2: '...select this Formation',
    combatCustomFormationAdd: 'Add',
    combatCustomFormations: 'All Specified Formations',
    combatFormationLineAhead: 'Line Ahead',
    combatFormationDoubleLine: 'Double Line',
    combatFormationDiamond: 'Diamond',
    combatFormationEchelon: 'Echelon',
    combatFormationLineAbreast: 'Line Abreast',
    combatFormationVanguard: 'Vanguard',
    combatFormationCombinedFleet1: 'Combined Fleet 1',
    combatFormationCombinedFleet2: 'Combined Fleet 2',
    combatFormationCombinedFleet3: 'Combined Fleet 3',
    combatFormationCombinedFleet4: 'Combined Fleet 4',
    combatCustomNightBattle1: 'If at this Node...',
    combatCustomNightBattle2: '...select Night Battle',
    combatCustomNightBattleAdd: 'Add',
    combatCustomNightBattles: 'All Night Battles',
    combatNightBattleTrue: 'True',
    combatNightBattleFalse: 'False',
    combatDamageStateHeavy: 'Heavy',
    combatDamageStateModerate: 'Moderate',
    combatDamageStateMinor: 'Minor',
    combatRetreatLimit: 'Retreat Limit',
    combatRepairLimit: 'Repair Limit',
    combatRepairTimeLimit: 'Repair Time Limit',
    combatLBASGroups: 'LBAS Groups',
    combatLBASGroup1Nodes: 'Group 1 Nodes',
    combatLBASGroup2Nodes: 'Group 2 Nodes',
    combatLBASGroup3Nodes: 'Group 3 Nodes',
    combatCheckFatigue: 'Check Fatigue',
    combatReserveDocks: 'Reserve Docks',
    combatPortCheck: 'Port Check',
    combatMedalStop: 'Medal Stop',
    questsHeader: 'Quests',
    configHeader: 'Config',
    configLoad: 'Load',
    configSave: 'Save',
  },
  bodyRunCmd: {
    intro: `Assuming that you've properly installed Java, Sikuli, and kcauto-kai, fill out the two fields below to
      generate the command you need to run in your command prompt/cmd/terminal to start kcauto-kai.`,
    sikuliPath: 'Sikuli Path',
    sikuliPathDesc: 'Full path to the folder/directory where Sikuli is installed (where sikulix.jar exists)',
    kcautoKaiPath: 'kcauto-kai Path',
    kcautoKaiPathDesc: 'Full path to the folder/directory where kcauto-kai is installed (where config.ini exists)',
    commandHeader: 'Command',
    noCommandNotice: 'Fill out the above two fields to generate the command.',
  },
  bodyAbout: {
    intro1:
  <span>
    <strong>kcauto-kai</strong> is a robust Kantai Collection automation tool. The successor
    to <a href={urls.KANCOLLE_AUTO_GITHUB_LINK}>kancolle-auto</a>, both it and kcauto-kai are proof-of-concepts in
    using Sikuli for vision-based scripting to automate the playing of Kantai Collection and are exercises in
    automating large, convoluted, and complex game logic. It is not designed to be the fastest automation tool,
    but instead designed to be robust and highly
    customizable. <strong>Please read the Disclaimer section before use!</strong>
  </span>,
    intro2:
  <span>
    Visit the <a href={urls.GITHUB_LINK}>kcauto-kai GitHub repository</a> for the latest releases and to
    report any bugs. Join the <a href={urls.DISCORD_LINK}>kcauto-kai Discord</a> for up to date information
    and help.
  </span>,
    disclaimerHeader: 'Disclaimer',
    disclaimer1: `kcauto-kai is meant for educational purposes only! Actual and prolonged usage of kcauto-kai may result
      in your account being banned. Remember that botting is against rules! The author of kcauto-kai makes no guarantee
      that the end user will not be caught and penalized for using kcauto-kai, and will not take any responsibility for
      any repercussions that befall the end user. Spamming expeditions and sorties nonstop raises your chances of being
      flagged and banned.`,
    disclaimer2: `In addition, although unlikely, you may lose ships if you allow kcauto-kai to conduct combat sorties.
      While kcauto-kai has been painstakingly designed to reduce the chances of this happening, the author of kcauto-kai
      takes no responsibility regarding the preservation of your ships.`,
  },
}
