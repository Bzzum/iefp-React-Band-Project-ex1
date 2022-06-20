interface Album {
  title: string;
  release: number;
  track: string[];
}
class Discography {
    list: Album[];
    constructor() {
      this.list = [];
    }
    addItem(item: Album){
      this.list.push(item);
    }
}

export default Discography;