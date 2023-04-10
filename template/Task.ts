import AuditTrail from "./AuditTrail";

abstract class Task {
  constructor(private _auditTrail: AuditTrail) {}

  public execute(): void {
    this._auditTrail.record();
    this.doExcute();
  }

  protected abstract doExcute(): void;
}
export default Task;
