//Very basic player class, can be expanded if needed
//Author: Team Buddy (4), Aaron Abbott 32520441

export class Player {
  private name: string;
  private id: number;
  private isSpectating: boolean;
  private currentView: number;
  //private abilities: Ability[];
  //the winstreak is how many DUELS a player has won in a row. not the matches.
  private winstreak: number;
  private winstreakHigh: number;
  private numSpectators: number;
  private isBot: boolean;

  constructor(name: string, id: number, isBot: boolean) {
    this.name = name;
    this.id = id;
    this.isSpectating = false;
    //by default the player is viewing their own view
    this.currentView = id;
    //this.abilities = [];
    this.winstreak = 0;
    this.winstreakHigh = 0;
    this.numSpectators = 0;
    this.isBot = isBot;
  }

  //getters
  public getName(): string {
    return this.name;
  }
  public getId(): number {
    return this.id;
  }
  public getIsSpectating(): boolean {
    return this.isSpectating;
  }
  public getWinstreak(): number {
    return this.winstreak;
  }
  public getNumSpectators(): number {
    return this.numSpectators;
  }
  public getIsBot(): boolean {
    return this.isBot;
  }
  public getCurrentView(): number {
    return this.currentView;
  }

  //setters
  public setIsSpectating(isSpectating: boolean) {
    this.isSpectating = isSpectating;
  }
  public setWinstreak(winstreak: number) {
    this.winstreak = winstreak;
  }
  public setNumSpectators(numSpectators: number) {
    this.numSpectators = numSpectators;
  }
  public setIsBot(isBot: boolean) {
    this.isBot = isBot;
  }
  public setCurrentView(currentView: number) {
    this.currentView = currentView;
  }

  //additional methods
  public incrementWinstreak() {
    this.winstreak++;
    if (this.winstreak > this.winstreakHigh) {
      this.winstreakHigh = this.winstreak;
    }
  }
  public resetWinstreak() {
    this.winstreak = 0;
  }

  public incrementNumSpectators(newSpec: number) {
    this.numSpectators += newSpec;
  }
  public decrementNumSpectators(lessSpec: number) {
    this.numSpectators -= lessSpec;
  }

  //currently the winsteak tracks duels won, not matches.
  public wonDuel(){
    this.incrementWinstreak();
  }
  public lostDuel(){
    this.resetWinstreak();
  }

  public lostMatch(winId: number) {
    this.resetWinstreak();
    this.setCurrentView(winId);
    this.setIsSpectating(true);
  }

}
