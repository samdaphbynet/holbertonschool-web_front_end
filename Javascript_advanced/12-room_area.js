// Define the roomDimentions object
const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length
    }
}

// Bind the getArea function to the roomDimentions object
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
