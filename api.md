# GenerateSong

Types:

- <code><a href="./src/resources/generate-song.ts">GenerateSongCreateResponse</a></code>

Methods:

- <code title="post /generate-song">client.generateSong.<a href="./src/resources/generate-song.ts">create</a>({ ...params }) -> GenerateSongCreateResponse</code>

# StemAudio

Types:

- <code><a href="./src/resources/stem-audio.ts">StemAudioCreateResponse</a></code>

Methods:

- <code title="post /stem-audio">client.stemAudio.<a href="./src/resources/stem-audio.ts">create</a>({ ...params }) -> StemAudioCreateResponse</code>

# StemmedAudio

Types:

- <code><a href="./src/resources/stemmed-audio.ts">StemmedAudioRetrieveResponse</a></code>

Methods:

- <code title="get /stemmed-audio">client.stemmedAudio.<a href="./src/resources/stemmed-audio.ts">retrieve</a>({ ...params }) -> StemmedAudioRetrieveResponse</code>

# Covers

Types:

- <code><a href="./src/resources/covers.ts">CoverCreateResponse</a></code>
- <code><a href="./src/resources/covers.ts">CoverListResponse</a></code>

Methods:

- <code title="post /covers/create">client.covers.<a href="./src/resources/covers.ts">create</a>({ ...params }) -> CoverCreateResponse</code>
- <code title="get /covers">client.covers.<a href="./src/resources/covers.ts">list</a>({ ...params }) -> CoverListResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelCreateResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="post /models/create">client.models.<a href="./src/resources/models.ts">create</a>({ ...params }) -> ModelCreateResponse</code>
- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelListResponse</code>

# Usage

Types:

- <code><a href="./src/resources/usage.ts">UsageRetrieveResponse</a></code>

Methods:

- <code title="get /usage">client.usage.<a href="./src/resources/usage.ts">retrieve</a>() -> UsageRetrieveResponse</code>

# User

Types:

- <code><a href="./src/resources/user.ts">UserRetrieveResponse</a></code>

Methods:

- <code title="get /user">client.user.<a href="./src/resources/user.ts">retrieve</a>() -> UserRetrieveResponse</code>

# Songs

Types:

- <code><a href="./src/resources/songs.ts">SongRetrieveResponse</a></code>
- <code><a href="./src/resources/songs.ts">SongListResponse</a></code>

Methods:

- <code title="get /song">client.songs.<a href="./src/resources/songs.ts">retrieve</a>({ ...params }) -> SongRetrieveResponse | null</code>
- <code title="get /songs">client.songs.<a href="./src/resources/songs.ts">list</a>({ ...params }) -> SongListResponse</code>
