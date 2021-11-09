<template>
    <i class="u-icons">
        <IconActivity />
        <IconAlert />
        <IconArchive />
        <IconArrowBottom />
        <IconArrowLeft />
        <IconArrowRight />
        <IconArrowTop />
        <IconBackwards />
        <IconBag />
        <IconBan />
        <IconBell />
        <IconBook />
        <IconBookmark />
        <IconCalendar />
        <IconCamera />
        <IconCaretBottom />
        <IconCaretLeft />
        <IconCaretRight />
        <IconCaretTop />
        <IconCart />
        <IconCheckmark />
        <IconChevronBottom />
        <IconChevronLeft />
        <IconChevronRight />
        <IconChevronTop />
        <IconClipboard />
        <IconClock />
        <IconClose />
        <IconCode />
        <IconCompose />
        <IconCreditcard />
        <IconDesktop />
        <IconDownload />
        <IconEdit />
        <IconEject />
        <IconEllipsisHorizontal />
        <IconEllipsisVertical />
        <IconEnd />
        <IconExport />
        <IconExternal />
        <IconEye />
        <IconFeed />
        <IconFile />
        <IconFilter />
        <IconFire />
        <IconFlag />
        <IconFolder />
        <IconFolderOpen />
        <IconForwards />
        <IconFullscreen />
        <IconFullscreenExit />
        <IconGift />
        <IconGithub />
        <IconHeart />
        <IconHome />
        <IconImport />
        <IconInbox />
        <IconInfo />
        <IconLightning />
        <IconLink />
        <IconLocation />
        <IconLock />
        <IconMail />
        <IconMenu />
        <IconMessage />
        <IconMicrophone />
        <IconMinus />
        <IconMobile />
        <IconMoon />
        <IconMove />
        <IconMusic />
        <IconMute />
        <IconOptions />
        <IconPaperclip />
        <IconPause />
        <IconPhoto />
        <IconPlay />
        <IconPlus />
        <IconPortfolio />
        <IconPrint />
        <IconReload />
        <IconReply />
        <IconSearch />
        <IconSend />
        <IconSettings />
        <IconSignIn />
        <IconSignOut />
        <IconStar />
        <IconStart />
        <IconTag />
        <IconTelephone />
        <IconTrash />
        <IconTwitter />
        <IconUnlock />
        <IconUpload />
        <IconUser />
        <IconVideo />
        <IconVolume />
        <IconWork />
        <IconZoomIn />
        <IconZoiomOut />
        <IconZoomRese />
    </i>
</template>

<script setup>
import {UIcon} from 'ungeui'
import Clipboard from 'clipboard'
let clipboard = new Clipboard('.btn');
import {
    IconActivity,
    IconAlert,
    IconArchive,
    IconArrowBottom,
    IconArrowLeft,
    IconArrowRight,
    IconArrowTop,
    IconBackwards,
    IconBag,
    IconBan,
    IconBell,
    IconBook,
    IconBookmark,
    IconCalendar,
    IconCamera,
    IconCaretBottom,
    IconCaretLeft,
    IconCaretRight,
    IconCaretTop,
    IconCart,
    IconCheckmark,
    IconChevronBottom,
    IconChevronLeft,
    IconChevronRight,
    IconChevronTop,
    IconClipboard,
    IconClock,
    IconClose,
    IconCode,
    IconCompose,
    IconCreditcard,
    IconDesktop,
    IconDownload,
    IconEdit,
    IconEject,
    IconEllipsisHorizontal,
    IconEllipsisVertical,
    IconEnd,
    IconExport,
    IconExternal,
    IconEye,
    IconFeed,
    IconFile,
    IconFilter,
    IconFire,
    IconFlag,
    IconFolder,
    IconFolderOpen,
    IconForwards,
    IconFullscreen,
    IconFullscreenExit,
    IconGift,
    IconGithub,
    IconHeart,
    IconHome,
    IconImport,
    IconInbox,
    IconInfo,
    IconLightning,
    IconLink,
    IconLocation,
    IconLock,
    IconMail,
    IconMenu,
    IconMessage,
    IconMicrophone,
    IconMinus,
    IconMobile,
    IconMoon,
    IconMove,
    IconMusic,
    IconMute,
    IconOptions,
    IconPaperclip,
    IconPause,
    IconPhoto,
    IconPlay,
    IconPlus,
    IconPortfolio,
    IconPrint,
    IconReload,
    IconReply,
    IconSearch,
    IconSend,
    IconSettings,
    IconSignIn,
    IconSignOut,
    IconStar,
    IconStart,
    IconTag,
    IconTelephone,
    IconTrash,
    IconTwitter,
    IconUnlock,
    IconUpload,
    IconUser,
    IconVideo,
    IconVolume,
    IconWork,
    IconZoomIn,
    IconZoomOut,
    IconZoomReset
} from 'ungeicons'
</script>

<style>
    .u-icons {
        font-size: 50px;
        display: flex;
        flex-wrap: wrap;
        /* justify-content: ; */
    }
    .u-icons > * {
        margin: 10px;
    }
    .u-icons > *:hover {
        cursor: pointer;
        transition: all .2s;
        border-radius: 4px;
        box-shadow: 0 0 4px #aaa;
    }
</style>