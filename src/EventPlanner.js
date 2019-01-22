class EventPlanner {
  constructor(content, date) {
    this._content = content || null
    this._date = date || null
  }

  getContent() {
    console.log(this._content);
    return this._content;
  }

  getDate() {
    console.log(this._date);
    return this._date;
  }
}
