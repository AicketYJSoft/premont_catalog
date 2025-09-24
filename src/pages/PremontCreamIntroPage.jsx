import React from "react";
import { motion } from "framer-motion";
import { Shield, Layers, Droplets, Moon, Leaf, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * 프레망 브랜드 소개서의 크림 한 페이지 구성
 * - 아이콘 + 키 메시지 요약 (건조·민감 피부용 고보습/장벽 강화 크림)
 * - Tailwind + shadcn/ui + framer-motion
 */
export default function PremontCreamIntroPage() {
  const features = [
    {
      icon: Layers,
      title: "고보습 보호막",
      desc:
        "세라마이드 & 천연 오일이 피부 위 보습 장벽을 형성, 건조·가려움·거칠음 예방.",
    },
    {
      icon: Droplets,
      title: "풍부하지만 산뜻한 흡수",
      desc:
        "리치 텍스처가 부드럽게 펴발리고 번들거림·끈적임 없이 촉촉하게 스며들어요.",
    },
    {
      icon: Shield,
      title: "장벽 강화 케어",
      desc:
        "100% 자연 유래 성분으로 외부 자극과 건조로부터 보호, 유·수분 밸런스 케어.",
    },
    {
      icon: Moon,
      title: "나이트 코쿤",
      desc:
        "잠들기 전 레이어링으로 수분을 잠가 밤사이 촉촉함을 유지하는 ‘수분 코쿤’.",
    },
    {
      icon: Leaf,
      title: "은은한 자연 향",
      desc:
        "무향료·합성향료 무첨가. 식물성 추출물 기반의 편안하고 순한 향.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            <span>Premont Premium Cream</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
            프레망 크림 – 장벽을 세우는 프리미엄 고보습 크림
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground">
            건조한 계절, 거칠어진 아기 볼에는 촉촉한 보습 장벽이 필요해요. 잠들기 전 프레망 크림으로 보호막을 씌워주세요.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">#고보습</Badge>
            <Badge variant="secondary">#장벽강화</Badge>
          </div>

          <div className="text-sm sm:text-base text-muted-foreground">
            <b>피부 타입</b>: 건조하고 민감한 피부 &nbsp;|&nbsp; <b>향</b>: 은은한 자연 향(무향료) &nbsp;|&nbsp; <b>제형</b>: 리치하지만 부드럽게 발리는 크림 타입
          </div>
        </motion.div>

        {/* 특장점 그리드 */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 * idx }}
            >
              <Card className="h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-muted/50 flex items-center justify-center">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold leading-snug">{f.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 사용 방법 */}
        <div className="mt-8">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-5 sm:p-6">
              <h2 className="text-lg font-semibold mb-2">사용 방법</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                얼굴을 포함해 건조한 부위에 적당량을 부드럽게 펴 발라 흡수시켜 주세요. 특히 밤 시간이나 건조한 환경에서는 로션을 바른 후 이 크림을 한 번 더 겹쳐 바르는 레이어링 케어로 수분을 잠궈 주세요. 필요 시 하루 중 수시로 덧발라도 좋아요.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 용량/가격 & CTA */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Badge className="rounded-xl px-3 py-1" variant="outline">용량 100ml</Badge>
            <Badge className="rounded-xl px-3 py-1" variant="outline">정가 59,000원</Badge>
            <Badge className="rounded-xl px-3 py-1" variant="outline">로션과 레이어링 추천</Badge>
          </div>
          <div className="text-xs text-muted-foreground">
            ※ 신생아 사용 전에는 반드시 소량으로 패치 테스트 후 전신에 사용해 주세요.
          </div>
        </div>

        {/* 하단 문구와 CTA */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            밤 사이 ‘보습 코쿤’으로 아침까지 보송·촉촉.
          </p>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl">자세히 보기</Button>
            <Button variant="outline" className="rounded-2xl">로션과 함께 보기</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
