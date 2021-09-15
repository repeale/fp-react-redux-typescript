export type Action = Decrement | Increment

export class Decrement {
  public readonly type = 'DECREMENT'
  public static of(): Decrement {
    return new Decrement()
  }
}

export class Increment {
  public readonly type = 'INCREMENT'
  public static of(): Increment {
    return new Increment()
  }
}
