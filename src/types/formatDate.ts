
const formatDate = (date) => {
    return new Intl.DateTimeFormat('ko-KR', {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true // 오전/오후 표시
    }).format(date);
}

export default formatDate;