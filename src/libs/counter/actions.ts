export type Action = Decrement | Increment

export class Decrement {
  public readonly type = '@appCounter/DECREMENT'
  public static of(): Decrement {
    return new Decrement()
  }
}

export class Increment {
  public readonly type = '@appCounter/INCREMENT'
  public static of(): Increment {
    return new Increment()
  }
}
