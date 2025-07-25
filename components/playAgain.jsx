
function PlayAgainButton ({onClick}) {
    return (
        <button className='font-GoogleSansCode text-white bg-transparent rounded-2xl p-4 mt-8 inset-ring-2 inset-ring-white/50 hover:inset-ring-cyan-500/60' onClick={onClick}>Play Again</button>
    );
}

export default PlayAgainButton;