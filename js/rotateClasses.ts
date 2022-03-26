export default function (event: Event, classes: Array<string>) {
    const target = (event.target as HTMLElement).parentElement;
    if (!target) throw new Error("event target is null!");
    for (let i = classes.length; i > 0; i--) {
        const e = classes[i - 1];
        if (target.classList.contains(e)) {
            target.classList.remove(e);
            target.classList.add(classes[i % classes.length]);
            break;
        }
    }
}
