function confessSecret(person: {secret?: string} ): void {
  const confession: string = person.secret || "Im a boring person."
  console.log(confession)
}
