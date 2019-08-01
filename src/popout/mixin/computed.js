const allType = ["ordinary", "warn", "error"];
const allAnimation = ["fade", "bottomToTop", "rightToLeft", "bounce", "shrink", "enlarge"];

export default {
    in_type() {
        if (allType.includes(this.type)) {
            return `${this.type}`
        } else {
            return "default"
        }
    },
    in_contentAnimation() {
        if (allAnimation.includes(this.contentAnimation)) {
            return `${this.contentAnimation}`
        } else {
            return "fade"
        }
    },
    in_filterAnimation() {
        if (allAnimation.includes(this.filterAnimation)) {
            return `${this.filterAnimation}`
        } else {
            return "fade"
        }
    },
    in_filterOpacity() {
        let x = parseFloat(this.filterOpacity);
        if (x >= 0 && x <= 1) {
            return this.filterOpacity
        } else {
            return "0.6"
        }
    }
}