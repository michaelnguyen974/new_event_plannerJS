class EventPlanner {
  constructor(content, date) {
    this._content = content || null
    this._date = date || null
  }

  getContent() {
    return this._content;
  }

  getDate() {
    return this._date;
  }
}
