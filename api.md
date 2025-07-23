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
- <code><a href="./src/resources/models.ts">ModelSearchResponse</a></code>

Methods:

- <code title="post /models/create">client.models.<a href="./src/resources/models.ts">create</a>({ ...params }) -> ModelCreateResponse</code>
- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelListResponse</code>
- <code title="get /models/search">client.models.<a href="./src/resources/models.ts">search</a>({ ...params }) -> ModelSearchResponse</code>

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

# ImageLoraModels

Types:

- <code><a href="./src/resources/image-lora-models.ts">ImageLoraModelCreateResponse</a></code>
- <code><a href="./src/resources/image-lora-models.ts">ImageLoraModelRetrieveResponse</a></code>
- <code><a href="./src/resources/image-lora-models.ts">ImageLoraModelListResponse</a></code>
- <code><a href="./src/resources/image-lora-models.ts">ImageLoraModelRetrieveStatusResponse</a></code>
- <code><a href="./src/resources/image-lora-models.ts">ImageLoraModelSearchResponse</a></code>

Methods:

- <code title="post /image-lora-models/create">client.imageLoraModels.<a href="./src/resources/image-lora-models.ts">create</a>({ ...params }) -> ImageLoraModelCreateResponse</code>
- <code title="get /image-lora-models/{id}">client.imageLoraModels.<a href="./src/resources/image-lora-models.ts">retrieve</a>(id) -> ImageLoraModelRetrieveResponse | null</code>
- <code title="get /image-lora-models">client.imageLoraModels.<a href="./src/resources/image-lora-models.ts">list</a>({ ...params }) -> ImageLoraModelListResponse</code>
- <code title="get /image-lora-models/{id}/status">client.imageLoraModels.<a href="./src/resources/image-lora-models.ts">retrieveStatus</a>(id) -> ImageLoraModelRetrieveStatusResponse | null</code>
- <code title="get /image-lora-models/search">client.imageLoraModels.<a href="./src/resources/image-lora-models.ts">search</a>({ ...params }) -> ImageLoraModelSearchResponse</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageCreateResponse</a></code>
- <code><a href="./src/resources/images.ts">ImageEditResponse</a></code>

Methods:

- <code title="post /images/create">client.images.<a href="./src/resources/images.ts">create</a>({ ...params }) -> ImageCreateResponse</code>
- <code title="post /images/edit">client.images.<a href="./src/resources/images.ts">edit</a>({ ...params }) -> ImageEditResponse</code>

# Videos

Types:

- <code><a href="./src/resources/videos.ts">VideoCreateResponse</a></code>

Methods:

- <code title="post /videos/create">client.videos.<a href="./src/resources/videos.ts">create</a>({ ...params }) -> VideoCreateResponse</code>

# VisualCreation

Types:

- <code><a href="./src/resources/visual-creation.ts">VisualCreationRetrieveResponse</a></code>
- <code><a href="./src/resources/visual-creation.ts">VisualCreationListResponse</a></code>

Methods:

- <code title="get /visual-creation/{id}">client.visualCreation.<a href="./src/resources/visual-creation.ts">retrieve</a>(id) -> VisualCreationRetrieveResponse</code>
- <code title="get /visual-creation">client.visualCreation.<a href="./src/resources/visual-creation.ts">list</a>({ ...params }) -> VisualCreationListResponse</code>
