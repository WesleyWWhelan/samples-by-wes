

class Sample:

    def __init__(self, link, instrument, genre, produced = True, feelings = None, key=None, bpm=None):

        self.link = link #link
        self.key = key #key
        self.instrument = instrument #instrument
        self.produced = produced #produced true or false
        self.feelings = feelings #list of how what kind of sound comes with the sample
        self.genre = genre #genre
        self.bpm = bpm #bpm


one = Samples('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Fingerpicking%20-%20Dry.wav?alt=media&token=e5d1a88b-ca2b-4010-883f-d381f87829bc',
                'Guitar','dance pop',False,['nostalgia','melancholy','sad'],'E Major','102')
two = Samples('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Fingerpicking%20-%20Wet.wav?alt=media&token=7a53cfac-79dc-425c-a6d2-a02134e67327',
                'Guitar','dance pop',True,['nostalgia','melancholy','sad'],'E Major','102')
three = Samples('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(muted)%20-%20Dry.wav?alt=media&token=1128900a-8037-4815-a669-5b61da3ae230',
                'Guitar','dance pop',False,['nostalgia','melancholy','sad'],'E Major','102')
four = Samples('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(muted)%20-%20Wet.wav?alt=media&token=58154029-10d1-4bcc-a5ce-79c656d73b74',
                'Guitar','dance pop',True,['nostalgia','melancholy','sad'],'E Major','102')
five = Samples('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(unmute)%20-%20Dry.wav?alt=media&token=22cd5a30-ab5c-44df-a39f-fbbc572f0a95',
                'Guitar','dance pop',False,['nostalgia','melancholy','sad'],'E Major','102')
six = Samples('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(unmute)%20-%20Wet.wav?alt=media&token=923ca6b5-384d-452a-b487-571e775ac1f0',
                'Guitar','dance pop',True,['nostalgia','melancholy','sad'],'E Major','102')


Demo_Samples = [
    one,
    two,
    three,
    four,
    five,
    six
]