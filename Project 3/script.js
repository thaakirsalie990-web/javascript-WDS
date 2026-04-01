const weaveMaster = document.getElementById('weave-master');
const OFFSET = 100


weaveMaster.addEventListener('click', () => {
    alert("Nice Try Bitch!!")
    window.close()
})

document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY

    const weaveDomain = weaveMaster.getBoundingClientRect()
    const horizontalShunpo = shunpoWeaving(weaveDomain.x, x, weaveDomain.width)
    const verticalShunpo = shunpoWeaving(weaveDomain.y, y, weaveDomain.height)

    const horizontalShunpoOffset = weaveDomain.width / 2 + OFFSET
    const verticalShunpoOffset = weaveDomain.height / 2 + OFFSET

    if (Math.abs(horizontalShunpo) <= horizontalShunpoOffset && Math.abs(verticalShunpo) <= verticalShunpoOffset) {
        setWeaving(
            weaveDomain.x + horizontalShunpoOffset / horizontalShunpo * 10,
            weaveDomain.y + verticalShunpoOffset / verticalShunpo * 10
        )
    }
})

function setWeaving(left, top) {
    const battleField = document.body.getBoundingClientRect()
    const weaveDomain = weaveMaster.getBoundingClientRect()

    if (shunpoWeaving(left, battleField.left, weaveDomain.width) < 0) {
        left = battleField.right - weaveDomain.width - OFFSET
    }
    if (shunpoWeaving(left, battleField.right, weaveDomain.width) > 0) {
        left = battleField.left - weaveDomain.width + OFFSET
    }
    if (shunpoWeaving(top, battleField.top, weaveDomain.height) < 0) {
        top = battleField.bottom - weaveDomain.height - OFFSET
    }
    if (shunpoWeaving(top, battleField.bottom, weaveDomain.height) > 0) {
        top = battleField.top - weaveDomain.height + OFFSET
    }

    weaveMaster.style.top = `${top}px`
    weaveMaster.style.left = `${left}px`
}
function shunpoWeaving(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}