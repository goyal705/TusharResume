document.getElementById('downloadButton').addEventListener('click', function() {
    // Create a link element
    var downloadLink = document.createElement('a');

    // Set the download attribute and file name
    downloadLink.download = 'tusharresume.pdf';

    // Set the href attribute to the path of the PDF file
    downloadLink.target="_blank"
    downloadLink.href = "TusharResume.pdf";

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Trigger a click event on the link to initiate the download
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
});

document.getElementById('downloadButton2').addEventListener('click', function() {
    // Create a link element
    var downloadLink = document.createElement('a');

    // Set the download attribute and file name
    downloadLink.download = 'tusharresume.pdf';

    // Set the href attribute to the path of the PDF file
    downloadLink.target="_blank"
    downloadLink.href = "TusharResume.pdf";

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Trigger a click event on the link to initiate the download
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
});
